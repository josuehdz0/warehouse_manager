const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawPackages(packageList){
  let packageElement = document.getElementById('packages')
  let packagesList = ''
  packageList.forEach(package =>  packagesList += `

  <div class="row cardborder justify-content-between mb-4 ms-4 me-4">
        <div class="col-1 d-flex justify-content-center pt-2 pb-2 greentext">TO:</div>
        <div class="col-5 d-flex justify-content-end pt-2 pb-2">${package.to}</div>
        <div class="col-1 d-flex justify-content-center pt-2 pb-2 greentext">ID:</div>
        <div class="col-3 d-flex justify-content-end pt-2 pb-2">${package.trackingNumber}</div>
      </div>

  
  
  `)
//  <p>${package.to} ${package.priorityLevel} ${package.isFragile} ${package.weight}  ${package.trackingNumber}</p> <br> `)
  packageElement.innerHTML = packagesList
}

function drawFragilePackages(){
  const fragilePackages = packages.filter(package => package.isFragile)
  console.log(fragilePackages);
  drawPackages(fragilePackages)
}
function drawHeavyPackages(){
  const heavyPackages = packages.filter(package => package.weight >= 6 )
  console.log(heavyPackages);
  drawPackages(heavyPackages)
}

function drawPriorityPackages(){
  let priority= window.prompt('What Priority is the package? Free, standard, or express?')
  const priorityPackages = packages.filter(package => package.priorityLevel.toLowerCase() == priority.toLowerCase())
  console.log(priorityPackages);
  drawPackages(priorityPackages)
}

function drawAllPackages(){
  drawPackages(packages)
}



// SECTION initialization
drawPackages(packages)