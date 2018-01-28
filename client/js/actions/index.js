const fetchBlocks = walls => (
  fetch('/waterwalls', {
    method: "POST",
    body: JSON.stringify( { walls }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(response => response.json()) 
);
