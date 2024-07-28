# 
??? note "Form"
    <div id='map' style='width: 100%; height: 400px;'></div>
    <style>input {background-color: lavender; padding: 10px 20px; width: 100%;}</style>
    <form action='mailto:ibercae@gmail.com?subject=a_modelo' method='post' enctype='text/plain'>
        <label for='Latitud'>Latitud</label><input type='text' name='Latitud' id='Latitud' value=36.66420921961255 required><br>
        <label for='Longitud'>Longitud</label><input type='text' name='Longitud' id='Longitud' value=-4.458623536597711 required><br>
        <label for='Temp. base calefaccion'>Temp. base calefaccion</label><input type='text' name='Temp. base calefaccion' id='Temp. base calefaccion' value=18 required><br>
        <label for='Temp. base refrigeracion'>Temp. base refrigeracion</label><input type='text' name='Temp. base refrigeracion' id='Temp. base refrigeracion' value=23 required><br>
        <label for='email'>email</label><input type='text' name='email' id='email' value=kgnete@gmail.com required><br>
        <button class='md-button md-button--primary' id='email-btn' type='submit' value='Submit' >:fontawesome-solid-paper-plane:</button>
    </form>
<button class='md-button md-button--primary' id='download-btn'>:fontawesome-solid-file-arrow-down: Descargar PDF</button>
<div id='pdf-render' style='border: 1px solid #ccc; width: 100%; height: auto; overflow: auto;'></div>
<script type='module'>
    import * as pdfjsLib from '/js/pdfjs/pdf.mjs';
    document.addEventListener('DOMContentLoaded', function () {
        const url = '../modelo.pdf';
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
    'center': [36.664, -4.458],
    'zoom': 8,
    'layers': [tileLayer]
  });
var marker = L.marker([36.664, -4.458]).addTo(map);
map.on('click', function (e) {
    if (marker) {
      map.removeLayer(marker);
    }
    marker = new L.Marker(e.latlng).addTo(map);
    document.getElementById('Latitud').value = e.latlng.lat;
    document.getElementById('Longitud').value = e.latlng.lng;
  });
</script>
