import gsap from 'gsap'

export function animatedDrawCircle(x, y, color='#ff6b6b', size=10, ctx=ctx){
    const point = {
        x:x,
        y:y,
        size:0,
        alpha:0
    }
    gsap.to(point, {
        size:size,
        alpha:1,
        duration:0.6,
        ease:"elastic.out(1,0.3)",
        onUpdate: function() {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fill();
        }
    })
    
}
