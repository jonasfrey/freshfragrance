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
        a_s_url_img
    ){
        this.s_name = s_name
        this.s_desc = s_desc
        this.a_s_url_img = a_s_url_img
    }
}

export {
    O_fragrance, 
    O_component,
    O_scent
}