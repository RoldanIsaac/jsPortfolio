domInjectorSingle = (componentUrl, componentDomDestination) => {
  fetch(componentUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al cargar ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(componentDomDestination).innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
      // Opcional: Puedes insertar un mensaje de error o una estructura predeterminada en el contenedor
      document.getElementById(
        destinationId
      ).innerHTML = `<p>Error al cargar el contenido. Intenta de nuevo más tarde.</p>`;
    });
};

const domInjector = (componentUrl, componentDomDestination, inputData) => {
  inputData.forEach((item) => {
    fetch(componentUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        if (inputData) {
          let replacedData = data;

          Object.entries(item).forEach(([key, value]) => {
            const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
            replacedData = replacedData.replace(regex, value);
          });

          const _data = createDummyDiv(replacedData);
          document.getElementById(componentDomDestination).appendChild(_data);
        } else {
          document.getElementById(componentDomDestination).appendChild(data);
        }
      })
      // Why not
      //   Object.values(item).forEach((value) => {
      //     if (typeof value === "string") {
      //       data = data.replace(/{{.*?}}/g, value);

      //       const _data = createDummyDiv(data);
      //       document.getElementById(componentDomDestination).appendChild(_data);
      //     }
      //   });

      // Why not 2
      //   Object.keys(item).forEach((key) => {
      //     const regex = new RegExp(`{{${key}}}`, "g");

      //     const _data = createDummyDiv(data.replace(regex, item[key]));

      //     document.getElementById(componentDomDestination).appendChild(_data);
      //   });

      .catch((error) => {
        console.error(error);
        document.getElementById(
          componentDomDestination
        ).innerHTML = `<p>Error loading content. Please reload.</p>`;
      });
  });
};

const createDummyDiv = (data) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = data;
  return tempDiv.firstChild;
};
