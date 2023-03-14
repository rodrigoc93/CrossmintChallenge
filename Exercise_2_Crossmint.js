
async function getMatrix(){
  return await fetch('https://challenge.crossmint.io/api/map/96e1131c-9ad0-441d-be00-cf9fc2515361/goal')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  
}

class PolyanetManager {
  constructor(candidateId) {
    this.candidateId = candidateId;
    this.polyanetsUrl = 'https://challenge.crossmint.io/api/polyanets';
  }

  async createPolyanet(x, y){
    const url = 'https://challenge.crossmint.io/api/polyanets';
    const candidateId = '96e1131c-9ad0-441d-be00-cf9fc2515361';
    
    
    const row = x;
    const column = y;
    
    // Create the payload with the row and column values
    const payload = {
      candidateId,
      row,
      column,
    };
    // POST request
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Polyanet posted successfully!');
        } else {
          console.log('Error:', response.statusText);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
    
    }

    async deletePolyanet() {
      const url = 'https://challenge.crossmint.io/api/polyanets';
      const candidateId = '96e1131c-9ad0-441d-be00-cf9fc2515361';
    
      // Determine the size of the matrix
      const matrix = await getMatrix();
      const size = matrix.goal.length;
    
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const row = i;
          const column = j;
  
          if(matrix.goal[i][j]=='POLYANET'){
            setTimeout(async () => {
              const payload = { candidateId, row, column };
              await fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(payload),
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then((response) => {
                if (response.ok) {
                  console.log(`Polyanet (${row}, ${column}) deleted successfully!`);
                } else {
                  console.log(`Error deleting polyanet (${row}, ${column}):`, response.statusText);
                }
              }).catch((error) => {
                console.log(`Error deleting polyanet (${row}, ${column}):`, error);
              });
            }, (i - 2) * 2500 + (j * 10000)); // Add a new setTimeout here to space out requests
          }
        }
      }
    }
  
}

class SoloonManager {
  constructor(candidateId) {
    this.candidateId = candidateId;
    this.polyanetsUrl = 'https://challenge.crossmint.io/api/soloons';
  }

  async createSoloon(x, y, color, candidateId){
    const url = 'https://challenge.crossmint.io/api/soloons';

    const row = x;
    const column = y;
    
    // Create the payload with the row and column values
    const payload = {
      candidateId,
      row,
      column,
      color
    };
    // POST request
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Soloon posted successfully!');
        } else {
          console.log('Error:', response.statusText);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
    
    }

  async deleteSoloon() {
      const url = 'https://challenge.crossmint.io/api/soloons';
      const candidateId = '96e1131c-9ad0-441d-be00-cf9fc2515361';
    
      // Determine the size of the matrix
      const matrix = await getMatrix();
      const size = matrix.goal.length;
    
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const row = i;
          const column = j;
  
          if(matrix.goal[i][j].includes('SOLOON')){
            setTimeout(async () => {
              const payload = { candidateId, row, column };
              await fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(payload),
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then((response) => {
                if (response.ok) {
                  console.log(`Soloon (${row}, ${column}) deleted successfully!`);
                } else {
                  console.log(`Error deleting soloon (${row}, ${column}):`, response.statusText);
                }
              }).catch((error) => {
                console.log(`Error deleting soloon (${row}, ${column}):`, error);
              });
            }, (i - 2) * 2500 + (j * 10000)); // Add a new setTimeout here to space out requests
          }
        }
      }
    }
  async resolveSoloonColor(string){

    let colorArr = string.split('_');
    let colorStr = colorArr[0].toLowerCase();

    return colorStr;
  }
}

class ComethManager {
  constructor(candidateId) {
    this.candidateId = candidateId;
    this.polyanetsUrl = 'https://challenge.crossmint.io/api/comeths';
  }

  async createCometh(x, y, direction, candidateId){
    const url = 'https://challenge.crossmint.io/api/comeths';

    const row = x;
    const column = y;
    
    // Create the payload with the row and column values
    const payload = {
      candidateId,
      row,
      column,
      direction
    };
    // POST request
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Cometh posted successfully!');
        } else {
          console.log('Error:', response.statusText);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
    
    }

  async deleteCometh() {
      const url = 'https://challenge.crossmint.io/api/soloons';
      const candidateId = '96e1131c-9ad0-441d-be00-cf9fc2515361';
    
      // Determine the size of the matrix
      const matrix = await getMatrix();
      const size = matrix.goal.length;
    
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const row = i;
          const column = j;
  
          if(matrix.goal[i][j].includes('COMETH')){
            setTimeout(async () => {
              const payload = { candidateId, row, column };
              await fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(payload),
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then((response) => {
                if (response.ok) {
                  console.log(`Cometh (${row}, ${column}) deleted successfully!`);
                } else {
                  console.log(`Error deleting cometh (${row}, ${column}):`, response.statusText);
                }
              }).catch((error) => {
                console.log(`Error deleting cometh (${row}, ${column}):`, error);
              });
            }, (i - 2) * 2500 + (j * 10000)); // Add a new setTimeout here to space out requests
          }
        }
      }
    }
  async resolveComethdirection(string){

    let directionArr = string.split('_');
    let directionStr = directionArr[0].toLowerCase();

    return directionStr;
  }
}


async function markLogo() {
  const candidateId = '96e1131c-9ad0-441d-be00-cf9fc2515361';
  const polyanetManager = new PolyanetManager(candidateId);
  const soloonManager = new SoloonManager(candidateId);
  const comethManager = new ComethManager(candidateId);
  // Determine the size of the matrix
  const matrix = await getMatrix();
  const size = matrix.goal.length;
  console.log("matrix", matrix);

  // Delay between requests (in milliseconds), to avoid error 429
  const delay = 750;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix.goal[i][j] === 'POLYANET')
      {
        await polyanetManager.createPolyanet(i, j);
        await new Promise(resolve => setTimeout(resolve, delay));
      } 
      else if (matrix.goal[i][j].includes('SOLOON'))
      {
        const color = await soloonManager.resolveSoloonColor(matrix.goal[i][j]);
        console.log('color', color);
        await soloonManager.createSoloon(i, j, color, candidateId);
        await new Promise(resolve => setTimeout(resolve, delay));
      } 
        else if (matrix.goal[i][j].includes('COMETH'))
      {
        const direction = await comethManager.resolveComethdirection(matrix.goal[i][j]);
        console.log('direction', direction);
        await comethManager.createCometh(i, j, direction, candidateId);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  return matrix;
}
  markLogo()