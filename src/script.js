document.addEventListener("DOMContentLoaded", () => {
    [1,2,3,4].forEach((divId, index) => {
        setTimeout(() => {
            div = document.getElementById(divId);
            diva = document.getElementById(divId + "a");
            divb = document.getElementById(divId + "b");
            div.classList.replace('bg-zinc-800', 'bg-zinc-600');
            diva.classList.replace('bg-zinc-600', 'bg-green-400');
            divb.classList.replace('bg-zinc-600', 'bg-green-400');
        }, 1000 * index);
    });
});