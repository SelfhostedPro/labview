export const generateClasses = (classes: string[], condition: boolean, className: string) => {

    if (condition) {
      // Append the conditional class name
      return [...classes, className];
    }
    return classes;
  };