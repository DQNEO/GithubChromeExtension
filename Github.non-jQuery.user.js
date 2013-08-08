(function() {

  // input追加用の要素作成
  function createPullReqInputElement(value) {
    var element = document.createElement('input');
    element.value = value;
    element.readOnly=true;
    element.style.display = "block";
    element.style.width = "100%";
    element.style.paddingLeft = "3px";
    element.style.color = "#333";
    element.addEventListener("click", function(){
      this.select();
    },false);

    return element;
  }

  var elements = document.getElementsByClassName("page-pullrequest");
  // when in PR page
  if(elements.length === 1){
    var branches = document.getElementsByClassName("current-branch");

    var branchTo = branches[0].innerText;
    var branchFrom = branches[1].innerText;
    var originTo = 'origin/' + branchTo;
    var originFrom = 'origin/' + branchFrom;

    var diffOrigin = 'git diff ' + originTo + '...' + originFrom;
    var gitCheckout = "git checkout " + branchFrom;

    var inputDiff = createPullReqInputElement(diffOrigin);
    var inputCheckout = createPullReqInputElement(gitCheckout);

    var addElement = document.getElementById('pull-head').getElementsByTagName("p");

    addElement[0].appendChild(inputCheckout);
    addElement[0].appendChild(inputDiff);

    var pullDescription = document.getElementsByClassName("pull-description");
    pullDescription[0].style.height = "95px";
  }

})();