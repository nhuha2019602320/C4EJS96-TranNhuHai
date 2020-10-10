const fetchpromis = fetch('https://sheetdb.io/api/v1/6sgpm6p6n9k23');
fetchpromis.then(conn => {
    console.log('Connected');
    console.log(conn);
    const josson = conn.json();
    josson.then(a => console.log(a))
})