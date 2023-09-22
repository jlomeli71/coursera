const KG_PER_KILO = 0.45;
const INCH_TO_METER = 0.0254;

let clients = [
    {
    Name: "John",
    Weight: 196,
    Height: 90,    
    },
    {
    Name: "Jane",
    Weight: 196,
    Height: 90,    
    },
    {
        Name: "Pedro",
        Weight: 196,
        Height: 90,    
    }
]


function getBMI(client) {
    let WeightInKg = client.Weight * KG_PER_KILO;
    let HeightInMt = client.Height * INCH_TO_METER;
    
    let BMI = WeightInKg / HeightInMt / HeightInMt
    return BMI
}




for (let i=0; i < clients.length; i++) {
    let client = clients[i]
    let bmi = getBMI(client)
    if(bmi > 25) {
        document.write(client.Name + ": " + bmi + "</br>")
    }
    

}
