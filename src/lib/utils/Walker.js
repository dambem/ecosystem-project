import gaussian from 'gaussian';

export class Walker {
    constructor(options = {}) {
        this.width = options.width || 1200;
        this.height = options.height || 600;
        this.x = options.width/2;
        this.y = options.height/2;
    }

    step() {
        const choice = Math.floor(Math.random() * 4)
        var steps_x = Math.floor(Math.random()*3) - 1
        var steps_y = Math.floor(Math.random()*3) - 1

        this.x += steps_x;
        this.y += steps_y;
    }

    step_n() {
        var sd_x = 200;
        var sd_y = 200;
        var mean_x = 600;
        var mean_y = 300;
        var distribution = gaussian(0, 1)
        var sample_x = distribution.ppf(Math.random());
        var sample_y = distribution.ppf(Math.random());

        // console.log()
        // console.log(sd*sample + mean)
        this.x = (sd_x*sample_x) + mean_x
        this.y = (sd_y*sample_y) + mean_y

    }
}