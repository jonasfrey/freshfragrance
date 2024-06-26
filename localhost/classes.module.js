// here only struct/object/class/model definitions should be mentioned

// for example
class O_fragrance{
    constructor(
        n_id,
        a_o_component, 
        n_nor_ethanol
    ){
        this.n_id = n_id
        this.a_o_component = a_o_component
        this.n_nor_ethanol = n_nor_ethanol
    }
}
class O_component{
    constructor(
        o_scent, 
        n_nor
    ){
        this.o_scent = o_scent
        this.n_nor = n_nor
    }
}
class O_scent{
    constructor(
        s_name,
        s_desc,
        a_s_url_img, 
        n_gram_per_ml, 
        a_n_channel_rgba_color
    ){
        this.s_name = s_name
        this.s_desc = s_desc
        this.a_s_url_img = a_s_url_img, 
        this.n_gram_per_ml = n_gram_per_ml
        this.a_n_channel_rgba_color = a_n_channel_rgba_color
    }
}

class O_img{
    constructor(
        s_url, 
        o_js_image_object
        // o_canvas, 
        // o_image_data
    ){
        this.s_url = s_url
        this.o_js_image_object = o_js_image_object
        // this.o_canvas = o_canvas, 
        // this.o_image_data = o_image_data
    }
}
export {
    O_fragrance, 
    O_component,
    O_scent, 
    O_img
}