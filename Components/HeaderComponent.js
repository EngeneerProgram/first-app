import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';


const header = () =>{
    return(

        <View style={{height:200, backgroundColor:'red'}}>
            <Text style={{color:'black'}}>Ciao, questa è la mia header!</Text>
        </View>
    )



}


/**
 * instruzioni::

il gestore di servizio di occupa di manutenzione, di scheduling dei rilasci e di osservazioni del servizio, si osserva che tutto fili liscio.

veidamo l'aspetto di monitoraggio di polarium:

si deve raggiungere 360 dev, le info sono nel file, e si deve accedere tramite utente e pass

## sezioni più importanti: 

monitoraggio robot

pianificazione dei rilasci

gestione incident, ri apre quando ci sono dei problemi all'applicativo!

## Monitoraggio dei robot

comunica con new test, ovvero la linea arancione, possiamo selezionare il mese e la data, possiamo scendere i giorni della settimana.

le due sezioni che ci interessano sono le homepage e le sezioni di ricerca

per interrogare l'app scegliamo una data e dobbiamo stare attenti che piattaforma casa deve raggiungere il 90%. Se alla fine del mese si arriva sotto soglia vengono pagate delle penali.

quindi: scegliamo il mese di Luglio e selezioniamo la funzione di ricerca, dopo cliccliamo la funzione di ricerca. Il sistema fa la ricerca e ci mostra quello che è successo nei giorni e nelle relative fascie orarie.

Se abbimao un test in ko la soglia cade a 80%, 

ci sono casi in cui i fallimenti possono essere bonificati, comunicando che non è stato un sistema dell'applicativo ma è stato proprio il test

per notificare si fa tramite 360deg. Si sceglie sempre il mene il mene, la piattaforma e nel menu giallo si spunta fuori soglia e si clicca interroga e ci vengono selezionate tutti i fuori soglia. A questo punto ne clicchiamo uno e nel menu giallo scegliamo il motivo per cui stiamo bonoficando questo ko. Dal menu a tendina scegliamo: Esempio: Fermo programmato o un'altra motivazione ad esempio password scaduta. E' assolutamente necessario indicare la causa del disservizio tranne se abbiamo una percentuale del 90%. Inoltre se abbiamo 2 o più ko dobbiamo specificare il numero nell'apposito riquadro.

Possiamo anche allegare un file e sono quelle che scarichiamo da UTest, dalla sezione monitoraggio robot, scegliamo il mese, scegliamo la funzione che è quella che da più problemmi nei test:
possiamo fare 2 cose:
1) pssiamo interrogare il test
2) fuori soglia e interroghiamo

una volta che siamo nella piattaforna NewTestnel tab supervision sotto scenario status. In analysis in diagnostics possiamo ricercare gli scenari. Quando il robot va in ko. va a registrare quello che succede. Quindi selezono a sinistra il range di ricerca clicco su search ed escono tutti fli scenari falliti. Abbiamo anche una registrazione per vedere quello che è successo durante il ko.

Quando facciamo la bonifica dei disservizi dobbiamo stare attenti all'orario. Se l'orario è fuori non c'è bisogno di bonificare perchè quello non è orario. Per contratto l'applicativo viene monitorato dalle 8 alle 18 quindi se l'orario è alle 03.00 non rientra nei nostri problemi.

Un esempio che si può fare di test fallito


se il robot non riesce a registrarsi ma se noi proviamo riusciamo a farlo si deve scegliere l'opzione:

- bonifica robot scenario errato


# Il minonitoraggio in tempo reale si puà notare solamente sulla piattaforma NewTest
p

per vederre se è questo modificato c'è tutto uno step: sulla pagina di360dev nel riquadro dev giallo


## pianificazione e rilasci

questa è la parte per prenotare gli slot per i rilasci.
 */
export default header;adf