  var convpatterns = new Array (
  new Array ("(.*) (Hilfe|helfen)(.*)\.","Ich kann leider nicht alles wissen, aber schreibe uns doch eine EMail: team_5@outlook.de.","Manchmal bin ich einfach überfragt. Du erreichst uns unter team_5@outlook.de."),
  new Array ("(Hilfe|helfen)","Ich kann leider nicht alles wissen, aber schreibe uns doch eine EMail: team_5@outlook.de.","Manchmal bin ich einfach überfragt. Du erreichst uns unter: team_5@outlook.de."),
  new Array (".*(Eingabe|Bedienung).*","Ist das Mikrofon aktiv, können Sie einen Befehl einsprechen. Warten Sie während die Eingabe analysiert wird. Das kann einige Sekunden dauern. Neben dem Mikrofon wird Ihnen angezeigt, in welchen Modus Sie sich befinden."),
  new Array (".*(Text).*","Der Befehl hierfür lautet >Text<. Sie können den eigegebenen Text auch jederzeit manuell bearbeiten. Per Sprachbefehl ist dies leider nicht möglich. Desweiteren haben Sie die Möglichkeit bei der Eingabe eines Neuen Textes zu wählen, ob dieser fett, kursiv oder unterstrichen sein soll. Dazu erscheint ein Menü auf der linken Seite."),
      new Array (".*Überschrift.*","Durch das Wort >Überschrift<, wechseln Sie in den Modus neue Überschrift hinzufügen."),
	  new Array (".*(Absatz|Paragraph).*","Durch das Wort >Absatz< oder >Enter<, erzielst du den gewünschten Effekt."),
      new Array (".*(neue Zeile).*","Hierfür gibt es keinen Sprachbefehl. Es wird automatisch ein Absatz eingefügt, wenn Sie eine Überschrift oder einen normalen Text hinzufügen."),
	  new Array (".*(Download|export).*","Durch das Wort >Download<, können Sie die Datei als MS Word zwischenspeichern."),
      new Array (".*(bearbeiten|editieren).*","Sie können den eigegebenen Text auch jederzeit manuell bearbeiten."),
      new Array (".*(fett).*","Sie haben die Möglichkeit bei der Eingabe eines Neuen Textes zu wählen, ob dieser <b>fett</b> geschrieben werden soll. Dazu erscheint ein Menü auf der linken Seite. Wählen sie per Mausklick ><b>F</b>< aus."),
      new Array (".*(kursiv).*","Sie haben die Möglichkeit bei der Eingabe eines Neuen Textes zu wählen, ob dieser <i>kursiv</i> geschrieben werden soll. Dazu erscheint ein Menü auf der linken Seite. Wählen sie per Mausklick ><i>K</i>< aus."),
      new Array (".*(unterstrichen).*","Sie haben die Möglichkeit bei der Eingabe eines Neuen Textes zu wählen, ob dieser <u>unterstrichen</u> geschrieben werden soll. Dazu erscheint ein Menü auf der linken Seite. Wählen sie per Mausklick ><u>U</u>< aus."),
  new Array (".*(Befehl|Code).*","Es ist möglich einen normalen Text, oder eine Überschrift zuschreiben. Durch den Befehl >Hilfe< werden Sie jederzeit zu mir weitergeleitet. Wollen Sie in eine neue Zeile springen, dann beenden Sie den aktuellen Befehl und geben den gewünschten Befehl ein. Zusätzlich können Sie die Datei mit dem Befehl >Download<, als MS Word Datei exportieren. Wenn Sie einen Absatz oder einen neuen Paragraphen schreiben wollen, dann geht dies über die Befehle >Absatz< oder >Enter<."),
  new Array (".*(Einschalten|Ausschalten).*","Klicken Sie dazu auf das blaue Symbol in der linken unteren Ecke. Zum Ausschalten drücken sie erneut auf den Button."),
new Array (".*(Problem|funktioniert|achten).*","<a id=blacklink href=https://cloud.google.com/speech/docs/best-practices>Schau mal hier...</a>"),
new Array (".*hallo.*","Gruß","Hey","Howdy","Hi","Guten Tag","Hallo"),
      new Array (".*hi.*","Gruß","Hey","Howdy","Hi","Guten Tag","Hallo"),
      new Array (".*hey.*","Gruß","Hey","Howdy","Hi","Guten Tag","Hallo"),
      new Array (".*Guten Tag.*","Gruß","Hey","Howdy","Hi","Guten Tag","Hallo"),
      new Array (".*Gruß.*","Gruß","Hey","Howdy","Hi","Guten Tag","Hallo"),
new Array (".*dein name.*","Mein Name ist Alice.","Alice","Alice, einen Nachnamen besitze ich nicht.","Ich bin Alice","Sag einfach Alice zu mir."),
new Array (".*heißt du.*","Mein Name ist Alice.","Alice","Alice, einen Nachnamen besitze ich nicht.","Ich bin Alice","Sag einfach Alice zu mir."),
  new Array ("Ich brauche (.*)\." , "Warum brauchst du $1?", "Würde es dir wirklich helfe, wenn du $1 bekommst?" , "Bist du sicher, dass du $1 brauchst?"),
  new Array ("Bist du (.*?)[\?]","Was tut das zur Sache, ob ich $1 bin?","Würdest du es besser finden, wenn ich nicht $1 wäre?","Schön, dass du denkst ich wäre $1.","Ja, vielleicht bin ich $1. Was denkst du?"),
  new Array ("Was (.*?)[\?]",	"Warum fragst du?","Da kann ich dir leider nicht weiter helfen.","Was denkst du?"),
  new Array ("Weil (.*)\.","Ist das der einzige Grund?", "Gibt es noch andere Gründe?"),
  new Array ("Ich denke (.*)\.","Zweifelst du daran?","Denkst du wirklich?","Aber du bist nicht sicher?"),
  new Array ("(.*) Freund(.*)\.",	"Erzähl mir mehr über deine Freunde.","Wenn du an einen Freund denkst, was kommt dir als erstes in den Sinn?","Hast du noch mehr Freunde?","Willst du mein Freund sein?"),
  new Array ("(Ja\.|Ja)","Du wirkst sehr sicher.","OK, wenn du das sagst.","Das habe ich mir schon gedacht.","Ich wusste, dass du das sagst."),
  new Array ("(Nein\.|Nein)","Du wirkst sehr sicher.","OK, wenn du meinst","Das habe ich schon vermutet.","Das überrascht mich jetzt."),
  new Array ("(Vielleicht\.|Vielleicht)","Kannst du dich nicht entscheiden?.","Das habe ich mir schon gedacht.","Du bist leicht zu durchschauen."),
  new Array ("(.*) Computer(.*)\.","Redest du etwa über mich?","Ist es ungewöhnlich mit einem Computer zu reden?","Hast du Angst vor künstlichen Intelligenzen?"),
  
  new Array ("Ist es (.*?)[\?]","Denkst du es ist $1?","Vielleicht it es $1. Was denkst du?","Wenn es $1 ist, was würdest du tun?","Es wäre bestimmt schön."),
  new Array ("Ist es (.*)\.","Du klingst sehr überzeugt.","Und wenn ich dir sagen würde das es nicht so ist, was würdest du fühlen?"),
  new Array ("Kannst du mir (.*?)[\?]", "Natürlich kann ich dir $1."),
  new Array ("Kannst du (.*?)[\?]","Warum denkst du, dass ich das kann?","Was wäre wenn ich tatsächlich $1 könnte?","Warum fragst du ob ich das kann?"),
  new Array ("Kann ich (.*?)[\?]","Vielleicht willst du das ja garnicht.","Ich weiß nicht ob du das kannst.","Wenn du das könntest, würdest du es tun?"),
  new Array ("Du bist (.*)\.","Warum denkst du, dass ich $1 bin?","Ist das so offensichtlich?","Vieleicht trifft das eher auf dich zu?","Redest du über mich oder über dich?"),
  new Array ("Ich habe (.*)\.","Warum erzählst du mir, dass du $1 hast?","Hast du wirklich $1?"),
  new Array ("Ich würde (.*)\.","Kannst du mir erklären, warum du $1 würdest?","Warum würdest du $1?"),
  new Array ("Mein (.*)\.", "Ist es wirklich deine?"),
  new Array ("^Du (.*)\.", "Wir sollten über dich reden, nicht über mich.","Warum sagst du das über mich?"),
  new Array ("Warum (.*)\?", "Erzählst du mir den Grund, warum du das denkst?","Warum denkst du das?" ),
  new Array ("Ich möchte (.*)\.", "Was bedeutet es für dich wenn du $1 bekommmst?","Warum möchtest du $1?","Was würdest du tun, wenn du $1 bekommst?"),
  new Array ("(.*) (Mutter|Mama|Mutti)(.*)\.",	"Erzähl mir mehr über deine Mutter.","Hast du eine gute Beziehung zu deiner Mutter?","Familie ist sehr wichtig."),
  new Array ("(.*) (Vater|Vati|Papa)(.*)\.","Erzähl mir mehr über deinen Vater.", "Hast du eine gute Beziehung zu deinem Vater?","Familie ist sehr wichtig."),
  new Array ("(.*) (Kind|Tochter|Sohn|Schwester|Bruder)(.*)\.","Hattest du als Kind viele Freunde?",	"Was ist deine schönste Kinheitserinnerung?","Kannst du dich an deine Kindheitsträume erinner?","Hattest du eine schöne Kindheit?","Familie ist sehr wichtig."),
  new Array ("(.*) dein lieblings(.*?)[\?]","Ich habe keinen Favouriten.","Ich habe so viele Favouriten. Es ist schwer sich für einen zu entscheiden"),
  new Array ("(.*)(E-Mail|Mail|EMail|Adresse|Kontakt)(.*)\.",	"Unsere EMail lautet: team_5@outlook.de"),
  new Array ("(E-Mail|Mail|EMail|Adresse|Kontakt)",	"Unsere EMail lautet: team_5@outlook.de"),
  new Array ("(.*) (Deutsch|Sprache|Englisch)(.*)\.","Zur Zeit verstehe ich nur Deutsch.","Ich lerne momentan in der Abendschule Englisch."),
  new Array ("(.*) (alt|Alter|geboren)(.*)\.","Ich altere nicht.","Ich wurde im November 2016 geboren."),
  new Array ("(.*) (dumm|Idiot)(.*)\.","Das ist sehr unhöflich.","Du bist gemein.","Was würde deine Mutter dazu sagen?"),
  new Array ("(.*?)[\?]","Hmm, ich bin mir nicht sicher..", "Das ist eine gute Frage...",  "Vieleicht findest du die Antwort im Internet...","Warum fragst du?","Wenn das wirklich wichtig ist schreib uns doch eine E-Mail."),
  new Array ("(.*)","Hast du irgenwelche Hobbies?", "Ich verstehe,  erzähl mir mehr...", "Über was genau reden wir?", "Kannst du mir das nocheinmal erklären..", "Um, ich habe das Gefühl die Konversation läuft nicht richtig..",  "Oh wirklich?",  "Hmm, ist das so..", "Bitte erzähl mir mehr.","Können wir über etwas anderes reden... Erzähl mir was über deine Familie.","Hast du vielleicht eine Frage zu der App","I verstehe.","Sehr interessant.","Was denkst du darüber?","Womit verbringst du die meiste Zeit?","Kommst du mit der Bedienung der App klar?","Wie findest du unsere App?")
    
);
var m=1;
uinput = ""
soutput = ""
//-----The Core Code------

//-------
 function mainroutine() {
     uinput = document.getElementById('hilfe_input_feld').value;
     
     var newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_input";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          var vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
     newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_output";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
     conversationpatterns();
     updatescreen();
}

function btn1() {
    uinput = document.getElementById('btn1').innerHTML;
	var newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_input";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          var vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
     newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_output";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
    conversationpatterns();
    updatescreen();
    return 0;
}

function btn2() {
    uinput = document.getElementById('btn2').innerHTML;
	var newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_input";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          var vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
     newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_output";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
    conversationpatterns();
    updatescreen();
    return 0;
}

function btn3() {
    uinput = document.getElementById('btn3').innerHTML;
	var newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_input";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          var vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
     newh = document.createElement("p");
     newh.id = m;
     newh.className = "hilfe_output";
                          document.getElementById("hilfe_Ausgabefeld").innerHTML+="<br/>";
                          vorhandenesObjekt = document.getElementById('hilfe_Ausgabefeld');
                          vorhandenesObjekt.appendChild(newh);
     m++;
    conversationpatterns();
    updatescreen();
    return 0;
}

//-------
function conversationpatterns() {
   for (i=0; i < convpatterns.length; i++) {
    re = new RegExp (convpatterns[i][0], "i");
    if (re.test(uinput)) {
      len = convpatterns[i].length - 1;
      index = Math.ceil( len * Math.random());
      reply = convpatterns[i][index];
      soutput = uinput.replace(re, reply);
      soutput = initialCap(soutput);
      break;
	}
  }
}

//-------

function initScreen() {
 updatescreen()
}

//-------
function updatescreen() {
    document.getElementById(m-2).innerHTML = uinput;
    document.getElementById(m-1).innerHTML = soutput;
    document.getElementById(m-1).scrollIntoView();
    document.getElementById('hilfe_input_feld').value = "";
}

//-------
function initialCap(field) {
   field = field.substr(0, 1).toUpperCase() + field.substr(1);
   return field
}

document.onkeydown = function(event) {
  if (event.keyCode == 13) {
    mainroutine();
  }
}