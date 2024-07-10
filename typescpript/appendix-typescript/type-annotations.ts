function printMessageWithAlert(message: string, isCritical?: boolean): void {
  console.log(message);

  if (isCritical) {
    alert(message);
  }
}
