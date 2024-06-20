
            import {
                O_scent, 
                O_fragrance
            } from "./classes.module.js"
            let a_o_scent = []
            
                let o_scent__vanilla = Object.assign(new O_scent(), {"s_name":"Vanilla","s_desc":"essential oil, vanilla planifolia","a_s_url_img":["./images/vanilla.jpeg"],"n_gram_per_ml":0.96})
                export {o_scent__vanilla}
                a_o_scent.push(o_scent__vanilla)
                

                let o_scent__jasmin_absolute_10 = Object.assign(new O_scent(), {"s_name":"Jasmin Absolute 10%","s_desc":"Jasminum Grandiflorum","a_s_url_img":["./images/jasmin.jpeg"],"n_gram_per_ml":0.89})
                export {o_scent__jasmin_absolute_10}
                a_o_scent.push(o_scent__jasmin_absolute_10)
                

                let o_scent__thymian_linalool = Object.assign(new O_scent(), {"s_name":"Thymian Linalool","s_desc":"Thymus vulgaris","a_s_url_img":["./images/thymian.jpeg"],"n_gram_per_ml":0.91})
                export {o_scent__thymian_linalool}
                a_o_scent.push(o_scent__thymian_linalool)
                

                let o_scent__salbei = Object.assign(new O_scent(), {"s_name":"Salbei","s_desc":"Salvia officinalis","a_s_url_img":["./images/salvia.jpeg"],"n_gram_per_ml":0.92})
                export {o_scent__salbei}
                a_o_scent.push(o_scent__salbei)
                

                let o_scent__fichtennadel = Object.assign(new O_scent(), {"s_name":"Fichtennadel","s_desc":"Picea abies","a_s_url_img":["./images/picea_abies.jpeg"],"n_gram_per_ml":0.89})
                export {o_scent__fichtennadel}
                a_o_scent.push(o_scent__fichtennadel)
                

                let o_scent__zimtrinde = Object.assign(new O_scent(), {"s_name":"Zimtrinde","s_desc":"Cinnamomum zeylanicum","a_s_url_img":["./images/zimtrinde.jpeg"],"n_gram_per_ml":1})
                export {o_scent__zimtrinde}
                a_o_scent.push(o_scent__zimtrinde)
                

                let o_scent__lavandin_super = Object.assign(new O_scent(), {"s_name":"Lavandin super","s_desc":"Lavandula hybrida","a_s_url_img":["./images/lavendel.jpeg"],"n_gram_per_ml":0.91})
                export {o_scent__lavandin_super}
                a_o_scent.push(o_scent__lavandin_super)
                

                let o_scent__tanne_weiss = Object.assign(new O_scent(), {"s_name":"Tanne weiss","s_desc":"Aibes alba","a_s_url_img":["./images/tanne_weiss.jpeg"],"n_gram_per_ml":0.9})
                export {o_scent__tanne_weiss}
                a_o_scent.push(o_scent__tanne_weiss)
                

                let o_scent__bergamottenminze = Object.assign(new O_scent(), {"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89})
                export {o_scent__bergamottenminze}
                a_o_scent.push(o_scent__bergamottenminze)
                

                let o_scent__citronella = Object.assign(new O_scent(), {"s_name":"Citronella","s_desc":"Cymbopogon winterianus","a_s_url_img":["./images/citronella.png"],"n_gram_per_ml":0.88})
                export {o_scent__citronella}
                a_o_scent.push(o_scent__citronella)
                
    
            let a_o_fragrance = []
            
                let o_fragrance__1 = Object.assign(new O_fragrance(), {"n_id":1,"a_o_component":[{"o_scent":{"s_name":"Citronella","s_desc":"Cymbopogon winterianus","a_s_url_img":["./images/citronella.png"],"n_gram_per_ml":0.88},"n_nor":0.22,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"22.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":0.66,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"66.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Fichtennadel","s_desc":"Picea abies","a_s_url_img":["./images/picea_abies.jpeg"],"n_gram_per_ml":0.89},"n_nor":0.12000000000000002,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"12.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.19999999999999996})
                export {o_fragrance__1}
                a_o_fragrance.push(o_fragrance__1)
                

                let o_fragrance__2 = Object.assign(new O_fragrance(), {"n_id":2,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__2}
                a_o_fragrance.push(o_fragrance__2)
                

                let o_fragrance__3 = Object.assign(new O_fragrance(), {"n_id":3,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__3}
                a_o_fragrance.push(o_fragrance__3)
                

                let o_fragrance__4 = Object.assign(new O_fragrance(), {"n_id":4,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__4}
                a_o_fragrance.push(o_fragrance__4)
                

                let o_fragrance__0 = Object.assign(new O_fragrance(), {"n_id":0,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__0}
                a_o_fragrance.push(o_fragrance__0)
                

                let o_fragrance__8 = Object.assign(new O_fragrance(), {"n_id":8,"a_o_component":[{"o_scent":{"s_name":"Vanilla","s_desc":"essential oil, vanilla planifolia","a_s_url_img":["./images/vanilla.jpeg"],"n_gram_per_ml":0.96},"n_nor":0.24,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"24.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Lavandin super","s_desc":"Lavandula hybrida","a_s_url_img":["./images/lavendel.jpeg"],"n_gram_per_ml":0.91},"n_nor":0.18,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"18.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Jasmin Absolute 10%","s_desc":"Jasminum Grandiflorum","a_s_url_img":["./images/jasmin.jpeg"],"n_gram_per_ml":0.89},"n_nor":0.18,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"18.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Thymian Linalool","s_desc":"Thymus vulgaris","a_s_url_img":["./images/thymian.jpeg"],"n_gram_per_ml":0.91},"n_nor":0.12,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"12.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Zimtrinde","s_desc":"Cinnamomum zeylanicum","a_s_url_img":["./images/zimtrinde.jpeg"],"n_gram_per_ml":1},"n_nor":0.12,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"12.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":0.06,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"6.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Tanne weiss","s_desc":"Aibes alba","a_s_url_img":["./images/tanne_weiss.jpeg"],"n_gram_per_ml":0.9},"n_nor":0.06,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"6.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Salbei","s_desc":"Salvia officinalis","a_s_url_img":["./images/salvia.jpeg"],"n_gram_per_ml":0.92},"n_nor":0.02,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"2.00"},"_o_html":{"s_tag":"input"}}},{"o_scent":{"s_name":"Citronella","s_desc":"Cymbopogon winterianus","a_s_url_img":["./images/citronella.png"],"n_gram_per_ml":0.88},"n_nor":0.02000000000000009,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"2.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__8}
                a_o_fragrance.push(o_fragrance__8)
                

                let o_fragrance__9 = Object.assign(new O_fragrance(), {"n_id":9,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__9}
                a_o_fragrance.push(o_fragrance__9)
                

                let o_fragrance__null = Object.assign(new O_fragrance(), {"n_id":null,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__null}
                a_o_fragrance.push(o_fragrance__null)
                

                let o_fragrance__7 = Object.assign(new O_fragrance(), {"n_id":7,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__7}
                a_o_fragrance.push(o_fragrance__7)
                

                let o_fragrance__6 = Object.assign(new O_fragrance(), {"n_id":6,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__6}
                a_o_fragrance.push(o_fragrance__6)
                

                let o_fragrance__5 = Object.assign(new O_fragrance(), {"n_id":5,"a_o_component":[{"o_scent":{"s_name":"Bergamottenminze","s_desc":"Mentha citrata","a_s_url_img":["./images/bergamottenminze.jpeg"],"n_gram_per_ml":0.89},"n_nor":1,"_o_js":{"o_jsh":{"s_tag":"input","type":"number","min":1,"max":99,"step":1,"value":"100.00"},"_o_html":{"s_tag":"input"}}}],"n_nor_ethanol":0.8})
                export {o_fragrance__5}
                a_o_fragrance.push(o_fragrance__5)
                
        export {
            a_o_scent,
            a_o_fragrance
        }
        