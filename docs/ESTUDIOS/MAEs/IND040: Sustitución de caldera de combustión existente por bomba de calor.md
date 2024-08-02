
# 
??? Tip "SOLICUTUD DE DOCUMENTO A MEDIDA"
       <style>input {background-color: lavender; padding: 10px 20px; width: 100%;}</style>
      <form action='mailto:ibercae@gmail.com?subject=CAEs_IND040' method='post' enctype='text/plain'>
    ??? Question "UBICACION"
         <div id='map' style='width: 100%; height: 400px;'></div>
        <label for='LATITUD'>LATITUD</label><input type='text' name='LATITUD' id='LATITUD' value=36.66420921961255 required><br>
        <label for='LONGITUD'>LONGITUD</label><input type='text' name='LONGITUD' id='LONGITUD' value=-4.458623536597711 required><br>
    ??? Question "ACTUACION"
        <label for='NOMBRE'>NOMBRE</label><input type='text' name='NOMBRE' id='NOMBRE' value=NMBRE DE LA LFICHA required><br>
        <label for='NUMERO DE SERIE DE LOS EQUIPOS'>NUMERO DE SERIE DE LOS EQUIPOS</label><input type='text' name='NUMERO DE SERIE DE LOS EQUIPOS' id='NUMERO DE SERIE DE LOS EQUIPOS' value=JJ434123412J,ERQWERQW435321 required><br>
    ??? Question "PROPIETARIO"
        <label for='NOMBRE Y APELLIDOS'>NOMBRE Y APELLIDOS</label><input type='text' name='NOMBRE Y APELLIDOS' id='NOMBRE Y APELLIDOS' value=mANUELA CARDENAS required><br>
        <label for='NIF NIE'>NIF NIE</label><input type='text' name='NIF NIE' id='NIF NIE' value=87983751R required><br>
    ??? Question "INSTALACION"
        <label for='POTENCIA DEMANDADA DE CLIMATIZACION [kW]'>POTENCIA DEMANDADA DE CLIMATIZACION [kW]</label><input type='text' name='POTENCIA DEMANDADA DE CLIMATIZACION [kW]' id='POTENCIA DEMANDADA DE CLIMATIZACION [kW]' value=10 required><br>
     <label for='email'>email</label><input type='text' name='email' id='email' value=micorreo@electronico.com required><br>
     <button class='md-button md-button--primary' id='email-btn' type='submit' value='Submit' >:fontawesome-solid-paper-plane:</button>
    </form>
<button class='md-button md-button--primary' id='download-btn'>:fontawesome-solid-file-arrow-down: Descargar PDF</button>
<div id='pdf-render' style='border: 1px solid #ccc; width: 100%; height: auto; overflow: auto;'></div>
<script type='module'>
    import * as pdfjsLib from '/js/pdfjs/pdf.mjs';
    document.addEventListener('DOMContentLoaded', function () {
        const url = '../IND040.pdf';
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/js/pdfjs/pdf.worker.mjs';
        const container = document.getElementById('pdf-render');
        function renderPage(pdf, pageNumber) {
            return pdf.getPage(pageNumber).then(page => {
                const viewport = page.getViewport({ scale: 1 });
                const containerWidth = container.clientWidth;
                const scale = containerWidth / viewport.width;
                const scaledViewport = page.getViewport({ scale });
                const canvas = document.createElement('canvas');
                canvas.className = 'pdf-page';
                const context = canvas.getContext('2d');
                canvas.style.width = `${scaledViewport.width}px`;;
                canvas.style.height = `${scaledViewport.height}px`;
                const resolutionScale = 2;
                canvas.height = scaledViewport.height * resolutionScale;
                canvas.width = scaledViewport.width * resolutionScale;
                container.appendChild(canvas);
                const renderContext = {
                    canvasContext: context,
                    viewport: page.getViewport({ scale: scale * resolutionScale })
                };
                return page.render(renderContext).promise;
            });
        }
        pdfjsLib.getDocument(url).promise.then(pdf => {
            console.log('PDF cargado');
            const totalPages = pdf.numPages;
            const renderPromises = [];
            for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
                renderPromises.push(renderPage(pdf, pageNumber));
            }
            return Promise.all(renderPromises);
        }).then(() => {
            console.log('Todas las páginas renderizadas');
        }).catch(reason => {
            console.error(reason);
        });
        const downloadBtn = document.getElementById('download-btn');
        downloadBtn.addEventListener('click', function () {
            window.location.href = url;
        });
    });
</script>
<script data-require='leaflet@0.7.3' data-semver='0.7.3'
    src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js'>
</script>
<link data-require='leaflet@0.7.3' data-semver='0.7.3' rel='stylesheet'
    href='//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css' />`
<script>
  var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  });
  var map = new L.Map('map', {
    'center': [36.66420921961255, -4.458623536597711],
    'zoom': 8,
    'layers': [tileLayer]
  });
var marker = L.marker([36.66420921961255, -4.458623536597711]).addTo(map);
map.on('click', function (e) {
    if (marker) {
      map.removeLayer(marker);
    }
    marker = new L.Marker(e.latlng).addTo(map);
    document.getElementById('LATITUD').value = e.latlng.lat;
    document.getElementById('LONGITUD').value = e.latlng.lng;
  });
</script>