function memoryUsage(applications){
    let maxMemory = 2048;
    let usedMemory = {
        memoryTerpakai : 0,
        sisaMemory : maxMemory
    }

    if(applications.length === 0){
        return usedMemory
    }


    let appsOver = []
    let memoryOver = 0
    for(i = 0; i < applications.length; i++){
        if(usedMemory.sisaMemory > 0){
            if(!usedMemory[applications[i].kind]){
                usedMemory[applications[i].kind] = [applications[i]['name']]
            }else{
                usedMemory[applications[i].kind].push(applications[i]['name'])
            }
            usedMemory.memoryTerpakai += applications[i].memory
            usedMemory.sisaMemory -= applications[i].memory
        }else{
            if(!usedMemory[applications[i].kind]){
                usedMemory[applications[i].kind] = [applications[i]['name']]
            }else{
                usedMemory[applications[i].kind].push(applications[i]['name'])
            }
            appsOver.push(applications[i].name)
            memoryOver += applications[i].memory
            usedMemory.overMemoryInformations = {
                appsOver : appsOver,
                memoryOver : memoryOver
            }
        }
    }

    
    return usedMemory
}

// TEST CASES
let aplikasi1 = [
    {
        name: "Adobe Photoshop",
        kind: "multimedia",
        memory: 1024
    },
    {
        name: "Operating System",
        kind: "default app",
        memory: 512
    },
    {
        name: "Sticky Notes",
        kind: "default app",
        memory: 100
    },
];
console.log(memoryUsage(aplikasi1));

// {
//     memoryTerpakai: 1636,
//     sisaMemory: 412,
//     multimedia: [ 'Adobe Photoshop' ],
//     'default app': [ 'Operating System', 'Sticky Notes' ]
// }


let aplikasi2 = [];
console.log(memoryUsage(aplikasi2));

// { memoryTerpakai: 0, sisaMemory: 2048 }

let aplikasi3 = [
    {
        name: "Operating System",
        kind: "default app",
        memory: 512
    },
    {
        name: "Point Blank",
        kind: "game",
        memory: 1536
    },
    {
        name: "Google Chrome",
        kind: "browser",
        memory: 125
    },
    {
        name: "Firefox",
        kind: "browser",
        memory: 150
    }
];
console.log(memoryUsage(aplikasi3));

// {
//     memoryTerpakai: 2323,
//     sisaMemory: 0,
//     'default app': [ 'Operating System' ],
//     game: [ 'Point Blank' ],
//     browser: [ 'Google Chrome', 'Firefox' ],
//     overMemoryInformations: { appsOver: [ 'Google Chrome', 'Firefox' ], memoryOver: 275 }
//   }