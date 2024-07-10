//https://www.shadertoy.com/view/MX3SW2
float f_n_circle_segment(
    vec2 o_trn_pix, 
    float n_ang_nor_start,
    float n_ang_nor_end,
    float n_radius
)
{

    float n_tau = 6.2831;
    float n_circle = abs(length(o_trn_pix)-n_radius);
    float n_ang_nor = fract(
    +.25
    -1.-atan(o_trn_pix.y, o_trn_pix.x)/n_tau);
    float n1 = length(
        o_trn_pix
        - vec2(
            sin(n_ang_nor_start*n_tau), 
            cos(n_ang_nor_start*n_tau)
        )*n_radius
    );
    float n2 = length(
        o_trn_pix
        - vec2(
            sin(n_ang_nor_end*n_tau), 
            cos(n_ang_nor_end*n_tau)
        )*n_radius
    );
    if(
        n_ang_nor<n_ang_nor_start
        || n_ang_nor>n_ang_nor_end
    ){
        n_circle = min(n1, n2);
    }
    return n_circle;
}
float f_n_rotated_circle_segment_divisor_line(
    vec2 o_trn_pix, 
    float n_ang_nor, 
    float n_radius
)
{
    float n_tau = 6.2831;
    float n_rad = n_tau - n_ang_nor*n_tau;
   vec2 o_p1 = 
    (mat2(
        cos(n_rad),-sin(n_rad),
        sin(n_rad),cos(n_rad)
    )*o_trn_pix);
    float n_line1 = abs(o_p1.x);
    if(o_p1.y < 0.){
        n_line1 = length(o_p1);
    }
    if(o_p1.y > n_radius){
        n_line1 = length(
           o_p1-vec2(0,n_radius)
        );
    }
    return n_line1;
}
float f_n_pizza_slice(
    vec2 o_trn_pix, 
    float n_ang_nor_start,
    float n_ang_nor_end,
    float n_radius
){

    float n_line1 = f_n_rotated_circle_segment_divisor_line(
        o_trn_pix, 
        n_ang_nor_start, 
        n_radius
    );
    float n_line2 = f_n_rotated_circle_segment_divisor_line(
        o_trn_pix, 
        n_ang_nor_end,
        n_radius
    );

    float n_circle_segment = f_n_circle_segment(
        o_trn_pix, 
        n_ang_nor_start, 
        n_ang_nor_end, 
        n_radius
    );
    
    return min(
        n_circle_segment, 
        min(n_line1, n_line2)
    );
}