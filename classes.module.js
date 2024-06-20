class O_serverside_function_exposed{
    constructor(
        s_name,
        f_exposed,
        f_s_err_arg_allowed, 
    ){
        this.s_name = s_name
        this.f_exposed = f_exposed
        this.f_s_err_arg_allowed = f_s_err_arg_allowed
    }
}

class O_ws_client{
    constructor(
        s_uuidv4,
        o_socket
    ){
        this.s_uuidv4 = s_uuidv4
        this.o_socket = o_socket
    }
}
export {
    O_ws_client, 
    O_serverside_function_exposed
}