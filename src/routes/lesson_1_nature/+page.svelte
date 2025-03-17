<script>
    import { Button } from "$lib/components/ui/button";
    import { Sidebar } from "$lib/components/ui/sidebar";
    import { onMount } from "svelte";
    import {animatedDrawCircle} from "$lib/utils/index.js"
    import { Walker } from '$lib/utils/Walker.js';
    import gsap from 'gsap';
    import Rainbow from 'rainbowvis.js';

    let canvasElement;
    let ctx;
    let walker;

    onMount(() => {
        if (!canvasElement) return;
        const canvas = canvasElement;
        canvas.width = 1200;
        canvas.height = 600
        var ctx = canvas.getContext('2d');
        const walker = new Walker({
            width: canvas.width,
            height: canvas.height
        })

        function animatedDrawCircle(x, y, color='#ff6b6b', size=100, type='circle'){
            const point = {
                x:x,
                y:y,
                size:0,
                alpha:0
            }
            gsap.to(point, {
                size:size,
                alpha:0.1,
                duration:10.0,
                ease:"slow(0.1,0.7,false)",
                onUpdate: function() {
                    ctx.beginPath();
                    ctx.fillStyle = '#'+color;
                    ctx.globalAlpha = point.alpha;
                    if (type=='circle'){
                        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
                    } else {
                        ctx.fillRect(point.x, point.y, point.size, point.size);

                    }
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
                    ctx.fillStyle = color;
                    // ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
                    ctx.globalAlpha = point.alpha;
                    ctx.fill();
                    ctx.stroke()
                }
            })
            
        }
        function drawInitialPoints() {
        var rainbow = new Rainbow()
        var runs = 100000
        // rainbow.setSpectrum('#ff6b6b', '#1dd1a1', '#feca57', '#ff9ff3', '#48dbfb')
        rainbow.setNumberRange(0, runs)
        for (let i = 0; i < runs; i++) {
          setTimeout(() => {
            walker.step()
            animatedDrawCircle(walker.x, walker.y, rainbow.colorAt(i), 5);
          }, i);
        }
        }
        drawInitialPoints();

    })
</script>

<Sidebar/>
<div class="p-4 sm:ml-64">
    <h2> Random Walker </h2>
    <!-- <Button variant="secondary" on:click={drawInitialPoints}> Start Random Walker </Button> -->
    <canvas bind:this={canvasElement} class="drawing-canvas border-solid border-2 border-stone-500 shadow-xl">
    </canvas>
</div>