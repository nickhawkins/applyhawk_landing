document.addEventListener("DOMContentLoaded", () => {
    
    const div1 = document.getElementById("1");
    const div1a = document.getElementById("1a");
    const div1b = document.getElementById("1b");

    const div2 = document.getElementById("2");
    const div2a = document.getElementById("2a");
    const div2b = document.getElementById("2b");

    setTimeout(() => {
        div1.classList.add("expand-animation");
        div1a.classList.add("expand-inner");
        div1b.classList.add("expand-inner");

        setTimeout(() => {
            div1.classList.replace('bg-zinc-800', 'bg-zinc-600');
            div1a.classList.replace('bg-zinc-600', 'bg-green-400');
            div1b.classList.replace('bg-zinc-600', 'bg-green-400');
        }, 1000);
    }, 0);


    setTimeout(() => {
        div2.classList.add("expand-animation");
        div2a.classList.add("expand-inner");
        div2b.classList.add("expand-inner");

        setTimeout(() => {
            div2.classList.replace('bg-zinc-800', 'bg-zinc-600');
            div2a.classList.replace('bg-zinc-600', 'bg-green-400');
            div2b.classList.replace('bg-zinc-600', 'bg-green-400');
        }, 1000);
    }, 1000);

});


// document.addEventListener("DOMContentLoaded", () => {


//     function a(){
//         const ids = [1, 2, 3, 4];
//         const completeDiv = document.getElementById('complete');

//         ids.forEach((divId, index) => {
//             setTimeout(() => {
                
//                 const div = document.getElementById(divId);
//                 const diva = document.getElementById(divId + "a");
//                 const divb = document.getElementById(divId + "b");

//                 // 
//                 div.classList.replace('bg-zinc-800', 'bg-zinc-600');
//                 diva.classList.replace('bg-zinc-600', 'bg-green-400');
//                 divb.classList.replace('bg-zinc-600', 'bg-green-400');

//                 // If it's the last div, hide all and show "complete"
//                 if (index === ids.length - 1) {

//                     setTimeout(() => {
//                         ids.forEach(id => {
//                             document.getElementById(id).style.display = 'none';
//                         });
//                         completeDiv.style.display = 'block';

//                         // After 3 seconds, hide "complete" and show the divs again
//                         setTimeout(() => {
//                             completeDiv.style.display = 'none';
//                             ids.forEach(id => {
//                                 document.getElementById(id).style.display = 'block';
//                             });

//                             setTimeout(() => {



//                                 a();
//                             }, 6000);

//                         }, 3000);
//                     }, 1000);

//                 }

//             }, 1000 * index);
//         });
//     }

//     a();

// });


// // document.addEventListener("DOMContentLoaded", () => {
// //     [1,2,3,4].forEach((divId, index) => {
// //         setTimeout(() => {
// //             div = document.getElementById(divId);
// //             diva = document.getElementById(divId + "a");
// //             divb = document.getElementById(divId + "b");
// //             div.classList.replace('bg-zinc-800', 'bg-zinc-600');
// //             diva.classList.replace('bg-zinc-600', 'bg-green-400');
// //             divb.classList.replace('bg-zinc-600', 'bg-green-400');
// //         }, 1000 * index);
// //     });
// // });