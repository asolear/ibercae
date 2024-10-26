 
# SOL060: DECLARACIÓN RESPONSABLE relativa a la estimación de que el consumo anual de energía por parte del consumidor o consumidores asociados a la instalación sea igual o mayor al 80 % de la energía anual generada por la instalación
??? Quote " FICHA"
    ##  FICHA
    <a href="../SOL060: ficha.pdf" download><button class='md-button md-button--primary' id='download-btn'>:fontawesome-solid-file-arrow-down: Descargar PDF</button></a>
    <div id='pdf-container-SOL060: ficha.pdf' data-pdf-url='../SOL060: ficha.pdf' style='border: 1px solid #ccc; width: 100%; height: auto; overflow: auto;'></div>
<style>input {background-color: lavender; padding: 10px 20px; width: 100%;}</style>
<style>select {background-color: lavender; border: none; padding: 10px 20px; width: 100%;}</style>
<style>textarea {background-color: lavender; border: none; padding: 10px 20px; width: 100%;}</style>
???+  "SOLICUTUD DE DOCUMENTO A MEDIDA"
    ## SOLICUTUD DE DOCUMENTO A MEDIDA
    <form action='mailto:ibercae@gmail.com?subject=SOL060' method='post' enctype='text/plain'>
    ???  "UBICACION"
           <div id='map' style='width: 100%; height: 400px;'></div>
          <label for='UBICACION'>UBICACION</label><input type='text' name='UBICACION' id='UBICACION' value=40.440627046503415,-3.6898799682967365 required><br>
    ??? "ACTUACION"
          <label>Potencia de la instalacion modificada. $kW$</label><input type='text' name='PC' id='Potencia de la instalacion modificada' value=99 required><br>
    <label for='comentarios'>Comentarios:</label><br><textarea id='comentarios' name='comentarios' rows='2' cols='50'></textarea><br>
    <label for='email'>email</label><input type='text' name='email' id='email' value=micorreo@electronico.com required><br>
    <button class='md-button md-button--primary' id='email-btn' type='submit' value='Submit' >:fontawesome-solid-paper-plane:</button>
    </form>

<script type='module'>
    import * as pdfjsLib from '/js/pdfjs/pdf.mjs';
    document.addEventListener('DOMContentLoaded', function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/js/pdfjs/pdf.worker.mjs';
        function renderPage(pdf, pageNumber, container) {
            return pdf.getPage(pageNumber).then(page => {
                const viewport = page.getViewport({ scale: 1 });
                const containerWidth = container.clientWidth;
                const scale = containerWidth / viewport.width;
                const scaledViewport = page.getViewport({ scale });
                const canvas = document.createElement('canvas');
                canvas.className = 'pdf-page';
                const context = canvas.getContext('2d');
                canvas.style.width = `${scaledViewport.width}px`;
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
        function renderPdf(url, container) {
            return pdfjsLib.getDocument(url).promise.then(pdf => {
                console.log(`PDF cargado en ${container.id}`);
                const totalPages = pdf.numPages;
                const renderPromises = [];
                for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
                    renderPromises.push(renderPage(pdf, pageNumber, container));
                }
                return Promise.all(renderPromises);
            }).then(() => {
                console.log(`Todas las páginas renderizadas en ${container.id}`);
            }).catch(reason => {
                console.error(reason);
            });
        }
        function setupPdfContainers() {
            document.querySelectorAll('[data-pdf-url]').forEach(container => {
                const url = container.getAttribute('data-pdf-url');
                renderPdf(url, container);
            });
        }
        function setupDownloadButtons() {
            document.querySelectorAll('[id^="download-btn-"]').forEach(button => {
                const index = button.id.split('-').pop();
                const url = document.getElementById(`pdf-container-${index}`).getAttribute('data-pdf-url');
                button.addEventListener('click', function () {
                    window.location.href = url;
                });
            });
        }
        setupPdfContainers();
        setupDownloadButtons();
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
  'center': [40.440627046503415, -3.6898799682967365],
    'zoom': 5,
    'layers': [tileLayer]
  });
  var marker = L.marker([40.440627046503415, -3.6898799682967365]).addTo(map);map.on('click', function (e) {
    if (marker) {
      map.removeLayer(marker);
    }
    marker = new L.Marker(e.latlng).addTo(map);
    document.getElementById('UBICACION').value = [e.latlng.lat, e.latlng.lng];
  });
</script>
<script type='text/javascript'>  window.MathJax = {    tex: {      inlineMath: [['$', '$'], ['\(', '\)']],      displayMath: [['$$', '$$'], ['\[', '\]']]    }  };</script>
<script src="https://utteranc.es/client.js"
            repo="asolear/ibercae"
            issue-term="pathname"
            theme="github-light"
            crossorigin="anonymous"
            async>
</script>
            