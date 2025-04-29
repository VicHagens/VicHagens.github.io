const setup = () => {

    // Create an object
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);


// uitbreiding

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ]

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };

    console.log(student2.address.zipCode);
    let tekst = JSON.stringify(students);
    console.log(tekst);

    tekstJS = JSON.parse(tekst);
    console.log("JSONparse: " + tekstJS[0].firstName);





}

window.addEventListener("load", setup);