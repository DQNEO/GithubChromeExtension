(function() {

  // input追加用の要素作成
  function createInputElementInPRPage(value) {
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

  function isPRPage() {
    var elements = document.getElementsByClassName("page-pullrequest");
    return (elements.length === 1);
  }

  // when in PR page
  if (isPRPage()) {
    var branches = document.getElementsByClassName("current-branch");

    var branchTo = branches[0].innerText;
    var branchFrom = branches[1].innerText;

    var originTo = 'origin/' + branchTo;
    var originFrom = 'origin/' + branchFrom;

    var yourFavoritePipe  = '';  // like ' | nkf -w | colordiff | less -R ';

    var diffOrigin = 'git diff ' + originTo + '...' + originFrom;
    var gitCheckout = "git checkout " + branchFrom;

    var inputDiff = createInputElementInPRPage(diffOrigin);
    var inputCheckout = createInputElementInPRPage(gitCheckout);

    var addElement = document.getElementById('pull-head').getElementsByTagName("p");

    addElement[0].appendChild(inputCheckout);
    addElement[0].appendChild(inputDiff);

    var pullDescription = document.getElementsByClassName("pull-description");
    pullDescription[0].style.height = "95px";
  }

})();
