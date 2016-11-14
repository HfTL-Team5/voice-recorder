  var convpatterns = new Array ( 
new Array (".*hallo.*","Gru&szlig","Hey","Howdy","Hi","Guten Tag","Hallo"),
new Array (".*dein name.*","Mein Name ist Alice.","Alice","Alice, einen Nachnamen besitze ich nicht.","Ich bin Alice","Sag einfach Alice zu mir."),
new Array (".*hei&szligt du.*","Mein Name ist Alice.","Alice","Alice, einen Nachnamen besitze ich nicht.","Ich bin Alice","Sag einfach Alice zu mir."),
  new Array ("Ich brauche (.*)\." , "Warum brauchst du $1?", "W&uumlrde es dir wirklich helfe, wenn du $1 bekommst?" , "Bist du sicher, dass du $1 brauchst?"),
  new Array ("Bist du (.*?)[\?]","Was tut das zur Sache, ob ich $1 bin?","W&uumlrdest du es besser finden, wenn ich nicht $1 w&aumlre?","Sch&oumln, dass du denkst ich w&aumlre $1.","Ja, vielleicht bin ich $1. Was denkst du?"),
  new Array ("Was (.*?)[\?]",	"Warum fragst du?","Da kann ich dir leider nicht weiter helfen.","Was denkst du?"),
  new Array ("Weil (.*)\.","Ist das der einzige Grund?", "Gibt es noch andere Gr&uumlnde?"),
  new Array ("Ich denke (.*)\.","Zweifelst du daran?","Denkst du wirklich?","Aber du bist nicht sicher?"),
  new Array ("(.*) Freund(.*)\.",	"Erz&aumlhl mir mehr &uumlber deine Freunde.","Wenn du an einen Freund denkst, was kommt dir als erstes in den Sinn?","Hast du noch mehr Freunde?","Willst du mein Freund sein?"),
  new Array ("(Ja\.|Ja)","Du wirkst sehr sicher.","OK, wenn du das sagst.","Das habe ich mir schon gedacht.","Ich wusste, dass du das sagst."),
  new Array ("(Nein\.|Nein)","Du wirkst sehr sicher.","OK, wenn du meinst","Das habe ich schon vermutet.","Das &uumlberrascht mich jetzt."),
  new Array ("(Vielleicht\.|Vielleicht)","Kannst du dich nicht entscheiden?.","Das habe ich mir schon gedacht.","Du bist leicht zu durchschauen."),
  new Array ("(.*) Computer(.*)\.","Redest du etwa &uumlber mich?","Ist es ungew&oumlhnlich mit einem Computer zu reden?","Hast du Angst vor k&uumlnstlichen Intelligenzen?"),
  
  new Array ("Ist es (.*?)[\?]","Denkst du es ist $1?","Vielleicht it es $1. Was denkst du?","Wenn es $1 ist, was w&uumlrdest du tun?","Es w&aumlre bestimmt sch&oumln."),
  new Array ("Ist es (.*)\.","Du klingst sehr &uumlberzeugt.","Und wenn ich dir sagen w&uumlrde das es nicht so ist, was w&uumlrdest du f&uumlhlen?"),
  new Array ("Kannst du mir (.*?)[\?]", "Nat&uumlrlich kann ich dir $1."),
  new Array ("Kannst du (.*?)[\?]","Warum denkst du, dass ich das kann?","Was w&aumlre wenn ich tats&aumlchlich $1 k&oumlnnte?","Warum fragst du ob ich das kann?"),
  new Array ("Kann ich (.*?)[\?]","Vielleicht willst du das ja garnicht.","Ich wei&szlig nicht ob du das kannst.","Wenn du das k&oumlnntest, w&uumlrdest du es tun?"),
  new Array ("Du bist (.*)\.","Warum denkst du, dass ich $1 bin?","Ist das so offensichtlich?","Vieleicht trifft das eher auf dich zu?","Redest du &uumlber mich oder &uumlber dich?"),
  new Array ("Ich habe (.*)\.","Warum erz&aumlhlst du mir, dass du $1 hast?","Hast du wirklich $1?"),
  new Array ("I would (.*)\.","Could you explain why you would $1?","Why would you $1?","Who else knows that you would $1?"),
  new Array ("Mein (.*)\.", "Ist es wirklich deine?"),
  new Array ("^Du (.*)\.", "Wir sollten &uumlber dich reden, nicht &uumlber mich.","Warum sagst du das &uumlber mich?"),
  new Array ("Warum (.*)\?", "Erz&aumlhlst du mir den Grund, warum du das denkst?","Warum denkst du das?" ),
  new Array ("Ich m&oumlchte (.*)\.", "Was bedeutet es f&uumlr dich wenn du $1 bekommmst?","Warum m&oumlchtest du $1?","Was w&uumlrdest du tun, wenn du $1 bekommst?"),
  new Array ("(.*) (Mutter|Mama|Mutti)(.*)\.",	"Erz&aumlhl mir mehr &uumlber deine Mutter.","Hast du eine gute Beziehung zu deiner Mutter?","Familie ist sehr wichtig."),
  new Array ("(.*) (Vater|Vati|Papa)(.*)\.","Erz&aumlhl mir mehr &uumlber deinen Vater.", "Hast du eine gute Beziehung zu deinem Vater?","Familie ist sehr wichtig."),
  new Array ("(.*) (Kind|Tochter|Sohn|Schwester|Bruder)(.*)\.","Hattest du als Kind viele Freunde?",	"Was ist deine sch&oumlnste Kinheitserinnerung?","Kannst du dich an deine Kindheitstr&aumlume erinner?","Hattest du eine sch&oumlne Kindheit?","Familie ist sehr wichtig."),
  new Array ("(.*) dein lieblings(.*?)[\?]","Ich habe keinen Favouriten.","Ich habe so viele Favouriten. Es ist schwer sich f&uumlr einen zu entscheiden"),
  new Array ("(.*) (E-Mail|Mail|EMail|Adresse|Kontakt)(.*)\.",	"Unsere EMail lautet: team5@outlook.de"),
  new Array ("(.*) (Deutsch|Sprache|Englisch)(.*)\.","Zur Zeit verstehe ich nur Deutsch.","Ich lerne momentan in der Abendschule Englisch."),
  new Array ("(.*) (alt|Alter|geboren)(.*)\.","Ich altere nicht.","Ich wurde im November 2016 geboren."),
  new Array ("(.*) (dumm|Idiot)(.*)\.","Das ist sehr unh&oumlflich.","Du bist gemein.","Was w&uumlrde deine Mutter dazu sagen?"),
  new Array ("(.*) (Hilfe|helfen)(.*)\.","Ich kann leider nicht alles wissen, aber schreibe uns doch eine EMail: team5@outlook.de.","Manchmal bin ich einfach &uumlberfragt. Du erreichst uns unter team5@outlook.de."),
  new Array ("(.*?)[\?]","Hmm, ich bin mir nicht sicher..", "Das ist eine gute Frage...",  "Vieleicht findest du die Antwort im Internet...","Warum fragst du?","Wenn das wirklich wichtig ist schreib uns doch eine E-Mail."),
  new Array ("(.*)","Hast du irgenwelche Hobbies?", "Ich verstehe,  erz&aumlhl mir mehr...", "&uumlber was genau reden wir?", "Kannst du mir das nocheinmal erkl&aumlren..", "Um, ich habe das Gef&uumlhl die Konversation l&aumluft nicht richtig..",  "Oh wirklich?",  "Hmm, ist das so..", "Bitte erz&aumlhl mir mehr.","K&oumlnnen wir &uumlber etwas anderes reden... Erz&aumlhl mir was &uumlber deine Familie.","Hast du vielleicht eine Frage zu der App","I verstehe.","Sehr interessant.","Was denkst du dar&uumlber?","Womit verbringst du die meiste Zeit?","Kommst du mit der Bedienung der App klar?","Wie findest du unsere App?")
    
);

uinput = ""
soutput = ""
//-----The Core Code------

//-------
 function mainroutine() {
 uinput = document.getElementById('hilfe_input').value;;
  conversationpatterns();
  updatescreen();
}

//-------
function conversationpatterns() {
	var Eingabe = uinput;
	Eingabe = Eingabe.toUpperCase();    
	if((Eingabe.indexOf('BEFEHL') != -1) || (Eingabe.indexOf('CODE') != -1) || (Eingabe.indexOf('BEDIENUNG') != -1)) {
		alert("Befehle folgen gleich");
	} else if((Eingabe.indexOf('FUNKTIONIERT') != -1) || (Eingabe.indexOf('PROBLEM') != -1) || (Eingabe.indexOf('BEACHTEN') != -1)) {
		//akt Chrome Version Java aktivieren
	} else {
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
}

//-------

function initScreen() {
 updatescreen()
}

//-------
function updatescreen() {
 document.getElementById('hilfe_output').innerHTML = soutput;
 document.getElementById('hilfe_input').value = "Frag mich etwas...";
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
//----Supplemental Code To Test System---

//------
function runtest(){

var testdata = new Array (
  new Array ("Hello."),
  new Array ("I can't understand you."),
  new Array ("I'm going to New York tomorrow."),
  new Array ("Are you serious?"),
  new Array ("Because they can."),
  new Array ("I'm really sorry about that.")

);


          for (train=0; train < testdata.length; train++) {
             document.mainscreen.BasicTextArea4.value = testdata[train];
             mainroutine()

             }

}
