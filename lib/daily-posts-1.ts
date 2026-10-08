import type { DailyPosts } from './daily-post-types';

// Days 1–5 of the Complete Path. Keys are the step paths used in journeys-data.
export const POSTS_1: DailyPosts = {
  '/shruti-smriti/': {
    mr: {
      title: 'श्रुती आणि स्मृती',
      tagline: 'ऐकलेलं आणि आठवणीत ठेवलेलं. दोन्हींचा मान वेगळा.',
      body: `आपल्या परंपरेत ज्ञानाचे दोन स्तर मानले आहेत.

*श्रुती* म्हणजे "जे ऐकलं गेलं". वेद आणि उपनिषदं कोणा एका माणसाने रचली नाहीत. ऋषींनी ती साक्षात्काराने "ऐकली" आणि पिढ्यानपिढ्या मुखोद्गत ठेवली, अशी श्रद्धा आहे.

*स्मृती* म्हणजे "जे आठवणीत ठेवलं गेलं". मनुस्मृती, महाभारत, पुराणं हे मानवी रचना आहेत, आणि काळानुसार त्यात बदल झाले.

दोन्हींमध्ये मतभेद दिसला तर श्रुती प्रमाण मानली जाते. म्हणूनच मूळ तत्त्वं स्थिर राहिली, पण सामाजिक नियम काळाप्रमाणे बदलू शकले.`,
      thought: 'तुमच्या आयुष्यात कोणत्या गोष्टी "कधीच बदलू नयेत" आणि कोणत्या "काळानुसार बदलाव्यात", असं तुम्हाला वाटतं?',
    },
    en: {
      title: 'Śruti & Smṛti',
      tagline: 'What is heard and what is remembered. The two carry different weight.',
      body: `The tradition sorts its knowledge into two layers.

*Śruti* means "what was heard". The Vedas and Upaniṣads are not credited to any one author. The belief is that seers "heard" them in deep insight and passed them down by memory.

*Smṛti* means "what was remembered". The Manusmṛti, the Mahābhārata and the Purāṇas are human compositions, and they changed with the times.

Where the two disagree, śruti prevails. That is why the core ideas stayed steady while social rules were free to change.`,
      thought: 'Which things in your life should never change, and which should change with the times?',
    },
  },

  '/vedas/': {
    mr: {
      title: 'चार वेद',
      tagline: 'एक वेद म्हणजे चार थरांचं ग्रंथालय, बाहेरच्या यज्ञापासून आतल्या प्रश्नापर्यंत.',
      body: `वेद चार आहेत: *ऋग्वेद* (स्तोत्रं), *यजुर्वेद* (यज्ञमंत्र), *सामवेद* (गायनाच्या चाली) आणि *अथर्ववेद* (दैनंदिन जीवन, उपचार). पण प्रत्येक वेद हा एकच ग्रंथ नाही. त्याचे चार भाग आहेत:

1️⃣ *संहिता*: स्तोत्रं आणि मंत्रांचा संग्रह.
2️⃣ *ब्राह्मण*: यज्ञ कसा आणि का करायचा, याचं स्पष्टीकरण.
3️⃣ *आरण्यक*: "अरण्यातले ग्रंथ". संसारातून निवृत्त झालेल्यांसाठी. यज्ञाचा अर्थ इथे आतल्या ध्यानात शोधला जातो.
4️⃣ *उपनिषद*: शेवटचे संवाद, "मी कोण?" या प्रश्नावर.

म्हणजे वेद बाहेरच्या अग्नीकडून आतल्या प्रश्नाकडे जातो.

हे सगळं कोणी एकत्र केलं? परंपरा सांगते की महर्षी *व्यास* यांनी या अफाट ज्ञानाची चार वेदांत विभागणी केली. त्यांनी प्रत्येक शिष्याला एकेक वेद दिला: पैल (ऋग्), वैशंपायन (यजुः), जैमिनी (साम), सुमन्तु (अथर्व). म्हणून त्यांना *वेदव्यास*, म्हणजे "वेदांची विभागणी करणारे", म्हणतात. शिष्यांनी आपल्या शिष्यांना शिकवलं. प्रत्येक शाखेने ते अचूक पठणाने जपलं, लेखनाच्या हजारो वर्षं आधीपासून.

(अभ्यासकांच्या मते हा संग्रह अनेक शतकांत अनेक ऋषींनी घडवला. परंपरा त्याच्या मांडणीचं श्रेय व्यासांना देते.)`,
      thought: 'तुमच्या घरात असा एखादा ठेवा आहे का, जो पुस्तकात नाही, फक्त पिढ्यानपिढ्या सांगितला गेला?',
    },
    en: {
      title: 'The Four Vedas',
      tagline: 'One Veda is a library in four layers, from the outer ritual to the inner question.',
      body: `There are four Vedas: the *Ṛgveda* (hymns), the *Yajurveda* (sacrificial formulas), the *Sāmaveda* (melodies) and the *Atharvaveda* (everyday life and healing). But no Veda is a single book. Each has four parts:

1️⃣ *Saṃhitā*: the collection of hymns and mantras.
2️⃣ *Brāhmaṇa*: manuals explaining how and why each rite is done.
3️⃣ *Āraṇyaka*: "forest texts", for those who had stepped back from household life. Here the rite is reread as inner meditation.
4️⃣ *Upaniṣad*: the closing dialogues on the question "Who am I?"

So the Veda travels from the outer fire to the inner question.

Who put it together? Tradition says the great sage *Vyāsa* sorted this vast body of knowledge into four Vedas and gave one to each disciple: Paila (Ṛg), Vaiśampāyana (Yajur), Jaimini (Sāma) and Sumantu (Atharva). That is why he is called *Veda-Vyāsa*, "the one who divided the Veda". The disciples taught their own students, and each school (*śākhā*) kept its version by exact recitation, thousands of years before writing.

(Scholars add that the collection grew over many centuries through many seers. Tradition credits Vyāsa with its arrangement.)`,
      thought: 'Is there something in your family that is not in any book, only passed down by telling?',
    },
  },

  '/upanishads/': {
    mr: {
      title: 'उपनिषदे',
      tagline: 'गुरूच्या जवळ बसून मिळालेलं ज्ञान.',
      body: `*उप-नि-षद्* म्हणजे जवळ बसणं. शिष्य गुरूजवळ बसतो आणि प्रश्न विचारतो. म्हणूनच उपनिषदं बहुतेक संवादांच्या रूपात आहेत.

यज्ञविधींकडून ती प्रश्नांकडे वळतात: मी कोण आहे? हे जग कशावर उभं आहे? मृत्यूनंतर काय?

प्रत्येक वेदाच्या शेवटी ती येतात, म्हणून त्यांना *वेदान्त* म्हणतात, म्हणजे वेदाचा शेवट आणि सार. मुख्य उपनिषदं सुमारे दहा ते तेरा आहेत. प्रसिद्ध महावाक्य "तत् त्वम् असि" (तू तेच आहेस) छांदोग्य उपनिषदातलं आहे.`,
      thought: 'तुम्ही कधी असा प्रश्न विचारला आहे का, ज्याचं उत्तर पुस्तकात नाही, फक्त एखाद्या माणसाकडून मिळू शकतं?',
    },
    en: {
      title: 'The Upaniṣads',
      tagline: 'Knowledge received by sitting down near a teacher.',
      body: `*Upa-ni-ṣad* means "sitting down near". A student sits close to the teacher and asks. That is why most Upaniṣads are written as conversations.

They turn from ritual to questions: Who am I? What does the world rest on? What happens after death?

They come at the end of each Veda, so they are called *Vedānta*, the end and the essence of the Veda. About ten to thirteen are counted as the principal ones. The famous saying "*tat tvam asi*" ("you are That") comes from the Chāndogya.`,
      thought: 'Have you ever asked a question that no book could answer, only a person?',
    },
  },

  '/upanishads/isha/': {
    mr: {
      title: 'ईशावास्य उपनिषद',
      tagline: 'सर्वात लहान उपनिषद, पण पहिल्याच श्लोकात क्रांतिकारी विचार.',
      body: `एखादं घर तुमच्या नावावर आहे, आणि कोणीतरी सांगतं, "हे सगळं खरं तर दुसऱ्याचं आहे. उपभोग घ्या, पण हावरटपणा करू नका." हेच ईशोपनिषदाचं पहिलं सूत्र आहे:

*ईशा वास्यमिदं सर्वं* — "या जगात जे काही आहे, ते सर्व ईश्वराने व्यापलेलं आहे."

फक्त १८ श्लोक. कर्म की ज्ञान, यापैकी एक निवडा असं हे सांगत नाही. कर्म करा, पण आसक्तीशिवाय. आत्मज्ञान मिळवा, पण जग सोडू नका. गांधीजी म्हणाले होते की इतर सर्व ग्रंथ नष्ट झाले आणि हा एक श्लोक उरला, तरी हिंदू धर्म जिवंत राहील.`,
      thought: 'आज विचार करा: तुमच्या आयुष्यात "माझं" म्हणून तुम्ही काय घट्ट धरून ठेवलंय?',
    },
    en: {
      title: 'Īśa Upaniṣad',
      tagline: 'The shortest Upaniṣad, and it opens with a radical idea.',
      body: `Imagine owning a house and being told: "It all belongs to someone else. Enjoy it, but don't grab it." That is the very first verse of the Īśa Upaniṣad:

*ईशा वास्यमिदं सर्वं* — "Whatever moves in this world is pervaded by the Lord."

It has just 18 verses, and it refuses to choose between action and wisdom. Act, but without clinging. Know the Self, but don't abandon the world. Gandhi said that if every other scripture were lost and this one verse survived, Hinduism would live on.`,
      thought: "Today's thought: what are you holding on to as \"mine\"?",
    },
  },

  '/upanishads/kena/': {
    mr: {
      title: 'केन उपनिषद',
      tagline: '"कोणाकडून?", एका प्रश्नाने सुरू होणारा ग्रंथ.',
      body: `पहिलाच प्रश्न: *केनेषितं पतति प्रेषितं मनः?* "कोणाच्या इच्छेने मन आपल्या विषयाकडे धावतं?" डोळ्यांना पाहायला कोण लावतं? कानांना ऐकायला कोण?

मग एक कथा येते. देव विजयाने गर्वाने फुगतात. तेव्हा ब्रह्म यक्षाच्या रूपात समोर येतं. अग्नी त्याच्या समोरचं गवताचं पातं जाळू शकत नाही. वायू ते उडवू शकत नाही. शेवटी उमा हैमवती इंद्राला सांगते: हा विजय तुमचा नव्हता, तो ब्रह्माचा होता.

सार असं: "जे वाणीने सांगता येत नाही, पण ज्याच्यामुळे वाणी बोलते, तेच ब्रह्म आहे."`,
      thought: 'तुमच्या यशात "मी केलं" आणि "घडून आलं" यांचं प्रमाण किती असतं?',
    },
    en: {
      title: 'Kena Upaniṣad',
      tagline: 'A text that begins with a question: "By whom?"',
      body: `The very first question: *keneṣitaṃ patati preṣitaṃ manaḥ?* "By whose will does the mind rush to its object?" Who makes the eyes see and the ears hear?

Then comes a story. The gods win a battle and swell with pride. Brahman appears before them as a *yakṣa*. Agni cannot burn a blade of grass in front of it. Vāyu cannot blow it away. At last Umā Haimavatī tells Indra: that victory was never yours, it was Brahman's.

The teaching: "What speech cannot express, but by which speech is spoken, know that to be Brahman."`,
      thought: 'In your own successes, how much is "I did it" and how much is "it came about"?',
    },
  },
};
