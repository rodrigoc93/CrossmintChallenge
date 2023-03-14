
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

async function createPolyanet(x, y){
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

async function deletePolyanet() {
  const url = 'https://challenge.crossmint.io/api/polyanets';
  const candidateId = '96e1131c-9ad0-441d-be00-cf9fc2515361';

  // Determine the size of the matrix
  const matrix = await getMatrix();
  const size = matrix.goal.length;

  // Delete polyanets along the top-left to bottom-right diagonal
  for (let i = 2; i < size - 2; i++) {
    const row = i;
    const column = i;
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
    }, (i - 2) * 2500);
  }

  // Delete polyanets along the bottom-left to top-right diagonal
  for (let i = 2; i < size - 2; i++) {
    const row = i;
    const column = size - i - 1;
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
    }, (i - 2) * 2500);
  }
}



async function markDiagonals() {

  matrix = await getMatrix();
  console.log('matrix', matrix);
  size = matrix.goal.length;

  // Delay between requests (in milliseconds), to avoid error 429
  const delay = 750;

  // Mark the top-left to bottom-right diagonal
  for (let i = 0; i < size; i++) {
    if (matrix.goal[i][i] == 'POLYANET') {
      await createPolyanet(i, i);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  // Mark the bottom-left to top-right diagonal
  for (let i = 0; i < size; i++) {
    if (matrix.goal[i][i] == 'POLYANET') {
      await createPolyanet(i, size - i - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  return matrix;
}
  markDiagonals()
