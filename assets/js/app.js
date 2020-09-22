let scanner = null;

$("#open-scanner").click(() => {
  (async () => {
    scanner = await Dynamsoft.BarcodeScanner.createInstance();
    let settings = await scanner.getRuntimeSettings();
    settings.region.regionMeasuredByPercentage = 1;
    settings.region.regionLeft = 25;
    settings.region.regionTop = 25;
    settings.region.regionRight = 75;
    settings.region.regionBottom = 75;
    await scanner.updateRuntimeSettings(settings);

    await scanner.setUIElement(document.getElementById("video-container"));
    scanner.onFrameRead = (results) => {
      console.log(results);
    };
    scanner.onUnduplicatedRead = (txt, result) => {
      alert(txt);
    };
    await scanner.show();
  })();
});
