document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const heart = new Image();
    heart.src = "t8tm_rywf_230302.jpg"; // You need to provide an image of the human heart

    const parts = [

        //Superior Vena Cava
        { name: "Superior Vena Cava", x: 150, y: 150, width: 100, height: 100, description: "The Superior Vena Cava returns deoxygenated blood from the upper body to the heart for oxygenation, vital for overall circulation." },
        { name: "Superior Vena Cava", x: 300, y: 300, width: 100, height: 100, description: "The Superior Vena Cava returns deoxygenated blood from the upper body to the heart for oxygenation, vital for overall circulation." },

        //Aorta
        { name: "Aorta", x: 400, y: 300, width: 100, height: 100, description: "The Aorta is the body's largest artery, distributing oxygen-rich blood from the heart to all body parts, facilitating essential circulation." },
        { name: "Aorta", x: 400, y: 400, width: 100, height: 100, description: "The Aorta is the body's largest artery, distributing oxygen-rich blood from the heart to all body parts, facilitating essential circulation." },
        

        //Right Atrium 
        { name: "Right Atrium", x: 300, y: 600, width: 100, height: 100, description: "TThe Right Atrium is a heart chamber that receives deoxygenated blood from the body and directs it to the right ventricle for pumping to the lungs." },
        { name: "Right Atrium", x: 250, y: 800, width: 100, height: 100, description: "The Right Atrium is a heart chamber that receives deoxygenated blood from the body and directs it to the right ventricle for pumping to the lungs." },
        
        //Left Atrium 

        { name: "Left Atrium ", x: 900, y: 600, width: 100, height: 100, description: "The left atrium receives oxygenated blood from the lungs and pumps it into the left ventricle, a key heart chamber." },
        { name: "Left Atrium ", x: 850, y: 800, width: 100, height: 100, description: "The left atrium receives oxygenated blood from the lungs and pumps it into the left ventricle, a key heart chamber." },
        

        //Pulmonary Artery

        { name: "Pulmonary Artery", x: 900, y: 400, width: 100, height: 100, description: "The Pulmonary Artery carries deoxygenated blood from the right ventricle to the lungs for oxygenation, a vital step in circulation." },
        { name: "Pulmonary Artery", x: 850, y: 400, width: 100, height: 100, description: "The Pulmonary Artery carries deoxygenated blood from the right ventricle to the lungs for oxygenation, a vital step in circulation." },
        

        //Pulmonary Vein

        
        { name: "Pulmonary Vein", x: 1200, y: 600, width: 100, height: 100, description: "Pulmonary Veins transport oxygenated blood from the lungs to the left atrium of the heart, supporting systemic circulation and oxygen supply." },
        { name: "Pulmonary Vein", x: 1100, y: 600, width: 100, height: 100, description: "Pulmonary Veins transport oxygenated blood from the lungs to the left atrium of the heart, supporting systemic circulation and oxygen supply." },
        


        //Left Ventricle ---> 
        { name: "Left Ventricle", x: 850, y: 1100, width: 100, height: 100, description: "The Left Ventricle is a crucial heart chamber responsible for pumping oxygen-rich blood into the body's main artery, the aorta. It plays a central role in systemic circulation." },
        { name: "Left Ventricle", x: 850, y: 1100, width: 100, height: 100, description: "The Left Ventricle is a crucial heart chamber responsible for pumping oxygen-rich blood into the body's main artery, the aorta. It plays a central role in systemic circulation." },
        


        //Right Ventricle

        { name: "Right Ventricle", x: 600, y: 1300, width: 100, height: 100, description: "The Right Ventricle is a heart chamber that receives deoxygenated blood from the right atrium and pumps it to the pulmonary artery, sending it to the lungs for oxygenation." },
        { name: "Right Ventricle", x: 600, y: 100, width: 100, height: 100, description: "The Right Ventricle is a heart chamber that receives deoxygenated blood from the right atrium and pumps it to the pulmonary artery, sending it to the lungs for oxygenation." },
        



        //Inferior Vena Cava done 

        { name: "Inferior Vena Cava", x: 100, y: 1200, width: 100, height: 100, description: "The Inferior Vena Cava (IVC) is a major vein that carries deoxygenated blood from the lower half of the body to the right atrium of the heart, aiding in circulation." },
        { name: "Inferior Vena Cava", x: 100, y: 1200, width: 100, height: 100, description: "The Inferior Vena Cava (IVC) is a major vein that carries deoxygenated blood from the lower half of the body to the right atrium of the heart, aiding in circulation." },
        



        //Cardiac Muscle done
        { name: "Cardiac Muscle ", x: 1000, y: 1400, width: 100, height: 100, description: "Cardiac muscle is a specialized type of muscle found in the heart. It contracts rhythmically to pump blood throughout the circulatory system." },
        { name: "Cardiac Muscle ", x: 1000, y: 1400, width: 100, height: 100, description: "Cardiac muscle is a specialized type of muscle found in the heart. It contracts rhythmically to pump blood throughout the circulatory system." },
        


        
        
        // Add more parts with their coordinates and descriptions
    ];

    const infoPanel = document.getElementById("infoPanel");
    const partName = document.getElementById("partName");
    const partDescription = document.getElementById("partDescription");

    let zoom = 0.3; // Set the initial zoom to 30%

    canvas.addEventListener("mousemove", function(e) {
        const mouseX = e.clientX - canvas.getBoundingClientRect().left;
        const mouseY = e.clientY - canvas.getBoundingClientRect().top;

        let cursorChanged = false; // To track if cursor changed

        for (const part of parts) {
            if (
                mouseX >= part.x * zoom &&
                mouseX <= (part.x + part.width) * zoom &&
                mouseY >= part.y * zoom &&
                mouseY <= (part.y + part.height) * zoom
            ) {
                partName.textContent = part.name;
                partDescription.textContent = part.description;
                infoPanel.style.display = "block";

                // Change cursor to pointer
                canvas.style.cursor = "pointer";

                cursorChanged = true;
                break;
            }
        }

        if (!cursorChanged) {
            infoPanel.style.display = "none";

            // Restore default cursor
            canvas.style.cursor = "default";
        }
    });

    canvas.addEventListener("wheel", function(e) {
        zoom += e.deltaY * -0.01;
        zoom = Math.min(Math.max(0.1, zoom), 1); // Limit zoom level between 10% and 100%
        draw();
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(heart, 0, 0, heart.width * zoom, heart.height * zoom);

        for (const part of parts) {
            ctx.strokeRect(part.x * zoom, part.y * zoom, part.width * zoom, part.height * zoom);
        }
    }

    heart.onload = function() {
        canvas.width = heart.width * zoom;
        canvas.height = heart.height * zoom;
        draw();
    };
});
