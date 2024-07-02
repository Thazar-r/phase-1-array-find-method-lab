// code your solution here
function superbowlWin(records) {
    const winningYearObj = records.find(record => record.result === "W");
    if (winningYearObj) {
      return winningYearObj.year;
    } else {
      return undefined;
    }
  }
  
  