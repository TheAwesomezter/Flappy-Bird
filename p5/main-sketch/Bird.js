function Bird() {
    this.y = height / 2;
    this.x = 35;

    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -15;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 30, 30);
    }

    this.update = function() {
        this.velocity = this.velocity + this.gravity;
        this.y = this.y + this.velocity;
        this.velocity = this.velocity * 0.9;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
    }

    this.up = function() {
        this.velocity = this.velocity + this.lift;
    }
}
