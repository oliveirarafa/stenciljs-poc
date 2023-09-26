//   private getAttributes() {
//     const nonPropAttributes = {};
//     for (const attribute of Array.from(this.hostElement.attributes)) {
//       const attributeName = attribute.name;

//       // Verifica se o atributo não é "class" e não é uma prop do componente
//       if (attributeName !== 'class' && !(attributeName in this)) {
//         let attributeValue = attribute.value;
//         if (attribute.value === '') attributeValue = 'true';
//         nonPropAttributes[attributeName] = attributeValue;
//       }
//     }
//     return nonPropAttributes;
//   }
