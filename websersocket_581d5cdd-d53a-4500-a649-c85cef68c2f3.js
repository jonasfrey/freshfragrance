
import {
    f_websersocket_serve,
    f_v_before_return_response__fileserver
} from "https://deno.land/x/websersocket@1.0.2/mod.js"

import {  normalize as f_s_path_cleaned } from "https://deno.land/std/path/mod.ts";

import {
    O_serverside_function_exposed,
    O_ws_client
} from "./classes.module.js"

import { f_o_config } from "./functions.module.js";
import { O_scent } from "./localhost/classes.module.js";


import {
    f_o_command
} from "https://deno.land/x/o_command@0.9/mod.js"



let s_path_abs_file_current = new URL(import.meta.url).pathname;
let s_path_abs_folder_current = s_path_abs_file_current.split('/').slice(0, -1).join('/');
const b_deno_deploy = Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined;

let a_o_ws_client = []

let f_s_varnamestring_from_s_name = function(s_name){
        return s_name
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '_');
}

let f_update_autogenerated = async function(){
    let a_o_scent = JSON.parse(await Deno.readTextFile('./a_o_scent.json'))
    let a_o_fragrance = JSON.parse(await Deno.readTextFile('./a_o_fragrance.json'))
    
    await Deno.writeTextFile(
        './localhost/autogenerated.module.js', 
        `
            import {
                O_scent, 
                O_fragrance
            } from "./classes.module.js"
            let a_o_scent = []
            ${a_o_scent.map(o_scent=>{
                let s_name_var = `o_scent__${f_s_varnamestring_from_s_name(o_scent.s_name)}`
                return `
                let ${s_name_var} = Object.assign(new O_scent(), ${JSON.stringify(o_scent)})
                export {${s_name_var}}
                a_o_scent.push(${s_name_var})
                `
            }).join('\n')}
    
            let a_o_fragrance = []
            ${a_o_fragrance.map(o_fragrance=>{
                let s_name_var = `o_fragrance__${o_fragrance.n_id}`
                return `
                let ${s_name_var} = Object.assign(new O_fragrance(), ${JSON.stringify(o_fragrance)})
                export {${s_name_var}}
                a_o_fragrance.push(${s_name_var})
                `
            }).join('\n')}
        export {
            a_o_scent,
            a_o_fragrance
        }
        `
    )
    
}

await f_update_autogenerated();
let o_config = await f_o_config();
console.log({o_config});

let f_handler = async function(o_request){

    // websocket 'request' handling here
    if(o_request.headers.get('Upgrade') == 'websocket'){

        const {
            socket: o_socket,
            response: o_response
        } = Deno.upgradeWebSocket(o_request);
        let o_ws_client = new O_ws_client(
            crypto.randomUUID(),
            o_socket
        )
        a_o_ws_client.push(o_ws_client);

        o_socket.addEventListener("open", (o_e) => {
            console.log({
                o_e, 
                s: 'o_socket.open called'
            })
        });

        o_socket.addEventListener("message", async (o_e) => {
            console.log({
                o_e, 
                s: 'o_socket.message called'
            })
            let v_data = o_e.data;
            a_o_ws_client
                .filter(o=>o!=o_ws_client)  // send to all other clients, comment out to send to all clients
                .forEach(o=>{
                    o.o_socket.send('message was received from a client')

                })
        });
        o_socket.addEventListener("close", async (o_e) => {
            a_o_ws_client.splice(a_o_ws_client.indexOf(o_ws_client), 1);
            console.log({
                o_e, 
                s: 'o_socket.close called'
            })
        });

        return o_response;
    }
    // normal http request handling here
    let o_url = new URL(o_request.url);
    
    let a_o_serverside_function_exposed = [
        new O_serverside_function_exposed(
            'readTextFile', 
            Deno.readTextFile,
            (a_v_arg)=>{
                let s_path = f_s_path_cleaned(a_v_arg[0]);
                // if(!s_path.startsWith('./localhost')){
                //     return `no other path than starting with ./localhost is allowed`
                // }
                return true
            },
        ),
        new O_serverside_function_exposed(
            'writeTextFile', 
            Deno.writeTextFile,
            (a_v_arg)=>{
                let s_path = f_s_path_cleaned(a_v_arg[0]);
                // if(!s_path.startsWith('./localhost')){
                //     return `no other path than starting with ./localhost is allowed`
                // }
                return true
            },
        ),
        new O_serverside_function_exposed(
            'f_o_command', 
            f_o_command,
            (a_v_arg)=>{
                let a_s_arg_allowed = ['git rev-parse HEAD', 'deno -v']
                if(!a_s_arg_allowed.includes(a_v_arg[0])){
                    return `'${a_v_arg[0]} not in allowed arguments: '${a_s_arg_allowed}`
                }
                return true
            },
        ), 
        new O_serverside_function_exposed(
            'f_update_autogenerated', 
            f_update_autogenerated, 
            (a_v)=>{
                if(a_v.length != 0){
                    return 'no arguments allowed'
                }
                return true
            }
        )
    ]
    let f_return_json_response = function(
        b_success, 
        s_msg, 
        v_return = null
    ){
        return new Response(
            JSON.stringify(
                {b_success, s_msg, v_return}
            ),
            {
                headers: {
                    'content-type':'application/json'
                }
            }
        )
    }


    try {
        const o_body = await o_request.json();

        let o_resp = {b_success: true, s_msg: 'success', v_return: null}
        let a_s_name_function_allowed = a_o_serverside_function_exposed.map(o=>o.s_name);

        if(!a_s_name_function_allowed.includes(o_body?.s_name_function)){
            return f_return_json_response(
                false, 
                `'${o_body?.s_name_function}' s_name_function not in a_s_name_function_allowed: ${a_s_name_function_allowed.join(',')}`
            )
        }

        let o_serverside_function_exposed = a_o_serverside_function_exposed.find(o=>o.s_name == o_body?.s_name_function);
        console.log(o_serverside_function_exposed)
        console.log("asdf")
        console.log(o_body)
        let v_s_err = o_serverside_function_exposed?.f_s_err_arg_allowed(o_body.a_v_param);
        if(v_s_err != true){
            return f_return_json_response(
                false, 
                v_s_err
            )
        }

        console.log(o_body)

        try {
            return f_return_json_response(
                true,
                'success', 
                await o_serverside_function_exposed?.f_exposed(...o_body?.a_v_param)
            )
        } catch (o_err) {
            return f_return_json_response(
                false, 
                o_err.toString()
            )
        }

    } catch (error) {
        console.log(error)
    }
    // console.log('asdf')
    if(o_url.pathname == '/'){
        return new Response(
            await Deno.readTextFile(
                `${s_path_abs_folder_current}/localhost/client.html`
            ),
            { 
                headers: {
                    'Content-type': "text/html"
                }
            }
        );
    }

    return f_v_before_return_response__fileserver(
        o_request,
        `${s_path_abs_folder_current}/localhost/`
    )

}

let s_name_host = Deno.hostname(); // or maybe some ip adress 112.35.8.13
let b_development = s_name_host != 'the_server_name_here';
let s_name_host2 = (b_development) ? 'localhost': s_name_host;
// let o_info_certificates = {
//     s_path_certificate_file: './self_signed_cert_581d5cdd-d53a-4500-a649-c85cef68c2f3.crt',
//     s_path_key_file: './self_signed_key_581d5cdd-d53a-4500-a649-c85cef68c2f3.key'
// }
await f_websersocket_serve(
    [
        {
            n_port: 8080,
            b_https: false,
            s_hostname: s_name_host,
            f_v_before_return_response: f_handler
        },
        ...[
            (!b_deno_deploy) ? {
                // ...o_info_certificates,
                n_port: 8443,
                b_https: true,
                s_hostname: s_name_host,
                f_v_before_return_response: f_handler
            } : false
        ].filter(v=>v)   
    ]
);