<script>
    import { Button } from "$lib/components/ui/button";
    import { Sidebar } from "$lib/components/ui/sidebar";
    import { onMount } from "svelte";
    import {animatedDrawCircle} from "$lib/utils/index.js"
    import { Walker } from '$lib/utils/Walker.js';

    import gsap from 'gsap';

    let canvasElement;

    onMount(() => {
        if (!canvasElement) return;

        
        const canvas = canvasElement;
        canvas.width = 1200;
        canvas.height = 600
        const walker = new Walker({
            width: canvas.width,
            height: canvas.height
        })

        // console.log(walker)
        var ctx = canvas.getContext('2d');

        function animatedDrawCircle(x, y, color='#ff6b6b', size=5){
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

        function animatedDrawLine(x, y, color='#ff6b6b', size=10){
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
                    ctx.moveTo(0, 0);
                    ctx.lineTo(point.x, point.y);
                    ctx.strokeStyle = color;
                    ctx.globalAlpha = point.alpha;
                    ctx.fill();
                    ctx.stroke()
                }
            })
            
        }
        function drawInitialPoints() {
        const colors = ['#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#ff9ff3'];
        
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            const x = 100 + i * 100;
            const y = canvas.height / 2;
            animatedDrawCircle(x, y, colors[i]);
          }, i * 300);
        }

                
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            const x = 100 + i * 100;
            const y = canvas.height / 2;
            animatedDrawLine(x, y, colors[i]);
          }, i * 300);
        }
        }
        drawInitialPoints();

    })
</script>

<Sidebar/>
<div class="p-4 sm:ml-64">
    <h2> Drawing Element Testing </h2>
    <canvas bind:this={canvasElement} class="drawing-canvas border-solid border-2 border-stone-500 shadow-xl">

    </canvas>
</div>