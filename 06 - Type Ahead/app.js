const cities = [];

fetch(enpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));
