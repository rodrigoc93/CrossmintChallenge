async function deleteMegaverse() {
  const url = 'https://challenge.crossmint.io/api/polyanets';
  const candidateId = '96e1131c-9ad0-441d-be00-cf9fc2515361';

  const matrix = await getMatrix();
  const size = matrix.goal.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const row = i;
      const column = j;

      if(matrix.goal[i][j]!='SPACE'){
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
              console.log(`Record (${row}, ${column}) deleted successfully!`);
            } else {
              console.log(`Error deleting record (${row}, ${column}):`, response.statusText);
            }
          }).catch((error) => {
            console.log(`Error deleting record (${row}, ${column}):`, error);
          });
        }, (i - 2) * 5000 + (j * 16000)); 
      }
    }
  }
}