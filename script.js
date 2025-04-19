// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counterNumber");

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 100000; // Adjust speed by changing the divisor

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 10); // Adjust interval for smoother animation
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});