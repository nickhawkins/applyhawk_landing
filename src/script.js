document.addEventListener("DOMContentLoaded", () => {
    const fakeTextarea = document.getElementById("fake-textarea");
    const textSegments = [
        { 
            text: "More Earnings\n", 
            bold: true 
        },
        {
            text: "Secure top-paying gigs by standing out from the crowd with high-quality proposals tailored to each opportunity.\n\n",
            bold: false
        },
        { 
            text: "Boost Your Productivity\n", 
            bold: true 
        },
        {
            text: "Free yourself from repetitive tasks and let ApplyHawk handle the heavy lifting of proposal writing.\n\n",
            bold: false
        },
        { 
            text: "Effortless and Effective\n", 
            bold: true 
        },
        {
            text: "Powered by cutting-edge AI, ApplyHawk learns your unique style and the nuances of each posting to deliver personalized, spot-on proposals every time.\n\n",
            bold: false
        }
    ];
  
    let segmentIndex = 0; 
    let charIndex = 0;
    let currentSegmentEl = null;
  
    // Setup the first segment container
    function createSegmentElement(isBold) {
        const el = isBold ? document.createElement("strong") : document.createElement("span");
        if (isBold) {
            el.classList.add("color-wave-text");
            el.classList.add("text-lg");
        }
        fakeTextarea.appendChild(el);
        return el;
    }
  
    // Prepare the first segment element
    currentSegmentEl = createSegmentElement(textSegments[0].bold);
  
    function typeCharacter() {
        // If we're out of segments entirely, stop typing
        if (segmentIndex >= textSegments.length) {
            clearInterval(typingInterval);
            return;
        }
  
        const segment = textSegments[segmentIndex];
        const currentChar = segment.text[charIndex];
        
        // If there's another character in the current segment, type it
        if (charIndex < segment.text.length) {
            if (currentChar === "\n") {
            // Handle line breaks
                fakeTextarea.appendChild(document.createElement("br"));
            } else {
                currentSegmentEl.appendChild(document.createTextNode(currentChar));
            }
            charIndex++;
        } else {
            // We finished this segment; move to the next one
            segmentIndex++;
            charIndex = 0;
            // If we have another segment, create a new container for it
            if (segmentIndex < textSegments.length) {
                currentSegmentEl = createSegmentElement(textSegments[segmentIndex].bold);
            }
        }
    }
  
    // Type one character every 50ms
    const typingInterval = setInterval(typeCharacter, 35);
});
  


// document.addEventListener("DOMContentLoaded", () => {
//     const fakeTextarea = document.getElementById("fake-textarea");
  
//     // The plain text version (for the typing effect):
//     const typedText = `ApplyHawk crafts winning proposals for you.
  
//   Stop wasting time on tedious writing and start focusing on the work you love.
  
//   More Jobs, More Earnings: Secure top-paying gigs by standing out from the crowd with high-quality proposals tailored to each opportunity.
  
//   Boost Your Productivity: Free yourself from repetitive tasks and let ApplyHawk handle the heavy lifting of proposal writing.
  
//   Effortless and Effective: Powered by cutting-edge AI, ApplyHawk learns your unique style and the nuances of each posting to deliver personalized, spot-on proposals every time.
  
//   Focus on growing your business while ApplyHawk does the rest. Get started today and unlock your full freelance potential.`;
  
//     // The final HTML version (with bold text). Use <strong> for bold parts.
//     const finalHTML = `ApplyHawk crafts winning proposals for you.
  
//   Stop wasting time on tedious writing and start focusing on the work you love.
  
//   <strong>More Jobs, More Earnings:</strong> Secure top-paying gigs by standing out from the crowd with high-quality proposals tailored to each opportunity.
  
//   <strong>Boost Your Productivity:</strong> Free yourself from repetitive tasks and let ApplyHawk handle the heavy lifting of proposal writing.
  
//   <strong>Effortless and Effective:</strong> Powered by cutting-edge AI, ApplyHawk learns your unique style and the nuances of each posting to deliver personalized, spot-on proposals every time.
  
//   Focus on growing your business while ApplyHawk does the rest. Get started today and unlock your full freelance potential.`;
  
//     let counter = 0;
//     fakeTextarea.innerText = ""; // Clear at start
  
//     // Type one character at a time
//     const textareaInterval = setInterval(() => {
//       if (counter < typedText.length) {
//         fakeTextarea.innerText += typedText[counter];
//         counter++;
//       } else {
//         clearInterval(textareaInterval);
  
//         // Once done typing, replace with final HTML (bold included).
//         // Replace newlines with <br> for correct line breaks
//         fakeTextarea.innerHTML = finalHTML.replace(/\n/g, "<br>");
//       }
//     }, 50);
//   });
  


// document.addEventListener("DOMContentLoaded", () => {

//     // Text area.
//     const textarea = document.getElementById("textarea");
//     const text = `ApplyHawk crafts winning proposals for you.
    
// Stop wasting time on tedious writing and start focusing on the work you love.

// More Jobs, More Earnings: Secure top-paying gigs by standing out from the crowd with high-quality proposals tailored to each opportunity.

// Boost Your Productivity: Free yourself from repetitive tasks and let ApplyHawk handle the heavy lifting of proposal writing.

// Effortless and Effective: Powered by cutting-edge AI, ApplyHawk learns your unique style and the nuances of each posting to deliver personalized, spot-on proposals every time.

// Focus on growing your business while ApplyHawk does the rest. Get started today and unlock your full freelance potential.`

//     let counter = -1;
//     textarea.value = "";
//     let textareaInterval = setInterval(() => {
//         if (counter >= text.length -1) {
//             clearInterval(this.textareaInterval);
//         } else {
//             counter +=1;
//             const current = textarea.value;
//             textarea.value = current + text[counter]
//         }
//     }, 50);

// });


    // // Alert.
    // const alert = document.getElementById("alert");
    // alert.style.top = '-100px';
    // alert.style.transition = 'all 0.5s ease';
    // setTimeout(() => {
    //     alert.style.top = '20px';
    // }, 1000);


// document.addEventListener("DOMContentLoaded", () => {
    
//     const div1 = document.getElementById("1");
//     const div1a = document.getElementById("1a");
//     const div1b = document.getElementById("1b");

//     const div2 = document.getElementById("2");
//     const div2a = document.getElementById("2a");
//     const div2b = document.getElementById("2b");

//     setTimeout(() => {
//         div1.classList.add("expand-animation");
//         div1a.classList.add("expand-inner");
//         div1b.classList.add("expand-inner");

//         setTimeout(() => {
//             div1.classList.replace('bg-zinc-800', 'bg-zinc-600');
//             div1a.classList.replace('bg-zinc-600', 'bg-green-400');
//             div1b.classList.replace('bg-zinc-600', 'bg-green-400');
//         }, 1000);
//     }, 0);


//     setTimeout(() => {
//         div2.classList.add("expand-animation");
//         div2a.classList.add("expand-inner");
//         div2b.classList.add("expand-inner");

//         setTimeout(() => {
//             div2.classList.replace('bg-zinc-800', 'bg-zinc-600');
//             div2a.classList.replace('bg-zinc-600', 'bg-green-400');
//             div2b.classList.replace('bg-zinc-600', 'bg-green-400');
//         }, 1000);
//     }, 1000);

// });


// // document.addEventListener("DOMContentLoaded", () => {


// //     function a(){
// //         const ids = [1, 2, 3, 4];
// //         const completeDiv = document.getElementById('complete');

// //         ids.forEach((divId, index) => {
// //             setTimeout(() => {
                
// //                 const div = document.getElementById(divId);
// //                 const diva = document.getElementById(divId + "a");
// //                 const divb = document.getElementById(divId + "b");

// //                 // 
// //                 div.classList.replace('bg-zinc-800', 'bg-zinc-600');
// //                 diva.classList.replace('bg-zinc-600', 'bg-green-400');
// //                 divb.classList.replace('bg-zinc-600', 'bg-green-400');

// //                 // If it's the last div, hide all and show "complete"
// //                 if (index === ids.length - 1) {

// //                     setTimeout(() => {
// //                         ids.forEach(id => {
// //                             document.getElementById(id).style.display = 'none';
// //                         });
// //                         completeDiv.style.display = 'block';

// //                         // After 3 seconds, hide "complete" and show the divs again
// //                         setTimeout(() => {
// //                             completeDiv.style.display = 'none';
// //                             ids.forEach(id => {
// //                                 document.getElementById(id).style.display = 'block';
// //                             });

// //                             setTimeout(() => {



// //                                 a();
// //                             }, 6000);

// //                         }, 3000);
// //                     }, 1000);

// //                 }

// //             }, 1000 * index);
// //         });
// //     }

// //     a();

// // });


// // // document.addEventListener("DOMContentLoaded", () => {
// // //     [1,2,3,4].forEach((divId, index) => {
// // //         setTimeout(() => {
// // //             div = document.getElementById(divId);
// // //             diva = document.getElementById(divId + "a");
// // //             divb = document.getElementById(divId + "b");
// // //             div.classList.replace('bg-zinc-800', 'bg-zinc-600');
// // //             diva.classList.replace('bg-zinc-600', 'bg-green-400');
// // //             divb.classList.replace('bg-zinc-600', 'bg-green-400');
// // //         }, 1000 * index);
// // //     });
// // // });