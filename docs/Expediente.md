---
hide:
  - footer
  - navigation
  - toc
---
#

<style>input {background-color: lavender; padding: 10px 20px; width: 100%;}</style>
<style>select {background-color: lavender; border: none; padding: 10px 20px; width: 100%;}</style>
<style>textarea {background-color: lavender; border: none; padding: 10px 20px; width: 100%;}</style>
<style>
.custom-file-upload {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
}
.custom-file-upload:hover {
    background-color: #45a049;
}
#file-chosen {
    margin-left: 10px;
    font-style: italic;
}
#file-chosen {
    color: red; /* Color del texto cuando no se ha seleccionado ningún archivo */
}
</style>
???+  "Documentación tramitación"
    <form action='mailto:ibercae@gmail.com?subject=IND040' method='post' enctype='text/plain'>
    ???  "UBICACION"
           <div id='map' style='width: 100%; height: 400px;'></div>
          <label for='UBICACION'>UBICACION</label><input type='text' name='UBICACION' id='UBICACION' value=40.440627046503415,-3.6898799682967365 required><br>
    <!--  -->
    ???+  "Ficha justificativa"
        Ficha justificativa de los ahorros energéticos calculados según la metodología descrita en la ficha.
        El propietario de los ahorros (o su representante) deberá descargar la ficha y volver a subirla firmada por elresponsable técnico de la actuación. 
        <br>    <!-- Primer campo de archivo personalizado -->
        <label for="file1" class="custom-file-upload md-button md-button--primary">
            Seleccionar archivo 1
        </label>
        <input type="file" id="file1" name="file1" style="display:none;" required>
        <span id="file-chosen1" style="color: red;">Ningún archivo seleccionado</span><br><br>
        <!--  -->
    <!--  -->
    ???+  "Declaración responsable sobre otras ayudas"
        Declaración responsable formalizada por el propietario inicial del ahorro de energía final referida a la solicitud y/u obtención de ayudas públicas para la misma actuación de ahorro de energía según el modelo del Anexo I de esta ficha. 
        <br>    <!-- Segundo campo de archivo personalizado -->
        <label for="file2" class="custom-file-upload md-button md-button--primary">
            Seleccionar archivo 2
        </label>
        <input type="file" id="file2" name="file2" style="display:none;" required>
        <span id="file-chosen2" style="color: red;">Ningún archivo seleccionado</span><br><br>

        <!--  -->
    ???+  "Ficha justificativa"
        Ficha justificativa de los ahorros energéticos calculados según la metodología descrita en la ficha.
        El propietario de los ahorros (o su representante) deberá descargar la ficha y volver a subirla firmada por elresponsable técnico de la actuación. 
        <br><label for="file" class="custom-file-upload md-button md-button--primary">
            Seleccionar archivo
        </label>
        <input type="file" id="file" name="file" style="display:none;" required>
        <span id="file-chosen" style="color: red;">Ningún archivo seleccionado</span><br><br>    
        <!--  -->
        <!--  -->
    ???+  "Ficha justificativa"
        Ficha justificativa de los ahorros energéticos calculados según la metodología descrita en la ficha.
        El propietario de los ahorros (o su representante) deberá descargar la ficha y volver a subirla firmada por elresponsable técnico de la actuación. 
        <br><label for="file" class="custom-file-upload md-button md-button--primary">
            Seleccionar archivo
        </label>
        <input type="file" id="file" name="file" style="display:none;" required>
        <span id="file-chosen" style="color: red;">Ningún archivo seleccionado</span><br><br>    
        <!--  -->
        <!--  -->
    ???+  "Ficha justificativa"
        Ficha justificativa de los ahorros energéticos calculados según la metodología descrita en la ficha.
        El propietario de los ahorros (o su representante) deberá descargar la ficha y volver a subirla firmada por elresponsable técnico de la actuación. 
        <br><label for="file" class="custom-file-upload md-button md-button--primary">
            Seleccionar archivo
        </label>
        <input type="file" id="file" name="file" style="display:none;" required>
        <span id="file-chosen" style="color: red;">Ningún archivo seleccionado</span><br><br>    
        <!--  -->
        <!--  -->
    ???+  "Ficha justificativa"
        Ficha justificativa de los ahorros energéticos calculados según la metodología descrita en la ficha.
        El propietario de los ahorros (o su representante) deberá descargar la ficha y volver a subirla firmada por elresponsable técnico de la actuación. 
        <br><label for="file" class="custom-file-upload md-button md-button--primary">
            Seleccionar archivo
        </label>
        <input type="file" id="file" name="file" style="display:none;" required>
        <span id="file-chosen" style="color: red;">Ningún archivo seleccionado</span><br><br>    
        <!--  -->
    <label for="file" class="custom-file-upload md-button md-button--primary">
        Seleccionar archivo
    </label>
    <input type="file" id="file" name="file" style="display:none;" required>
    <span id="file-chosen" style="color: red;">Ningún archivo seleccionado</span><br><br>
    <label for='email'>email</label><input type='text' name='email' id='email' value=micorreo@electronico.com required><br>
    <button class='md-button md-button--primary' id='email-btn' type='submit' value='Submit' >:fontawesome-solid-paper-plane:</button>
    </form>

<script type='module'>
const fileInputs = [
    { input: document.getElementById('file1'), chosen: document.getElementById('file-chosen1') },
    { input: document.getElementById('file2'), chosen: document.getElementById('file-chosen2') },
    { input: document.getElementById('file3'), chosen: document.getElementById('file-chosen3') },
    { input: document.getElementById('file4'), chosen: document.getElementById('file-chosen4') }
];

fileInputs.forEach(fileInputObj => {
    fileInputObj.input.addEventListener('change', function() {
        if (fileInputObj.input.files.length > 0) {
            fileInputObj.chosen.textContent = fileInputObj.input.files[0].name;
            fileInputObj.chosen.style.color = 'green'; // Cambia el color del texto a verde
        } else {
            fileInputObj.chosen.textContent = 'Ningún archivo seleccionado';
            fileInputObj.chosen.style.color = 'red'; // Cambia el color del texto a rojo si no se selecciona ningún archivo
        }
    });
});

</script>

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