export interface VedicText {
  name: string;
  deva: string;
  category?: string;
  categoryDeva?: string;
  status: string;
  statusDeva: string;
  role?: string;
  roleDeva?: string;
  structure: string;
  structureDeva: string;
  region?: string;
  regionDeva?: string;
  desc: string;
  descDeva: string;
}

export interface VedicTeaching {
  name: string;
  nameDeva: string;
  citation: string;
  citationDeva: string;
  summary: string;
  summaryDeva: string;
  verse?: {
    deva: string;
    trans: string;
    cite: string;
  };
}

export const SHAKHAS_DATA: Record<string, VedicText[]> = {
  rig: [
    {
      name: 'Śākala Saṃhitā',
      deva: 'शाकल संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '10 Maṇḍalas, 1,028 Sūktas, 10,552 verses',
      structureDeva: '१० मंडळे, १,०२८ सूक्ते, १०,५५२ ऋचा',
      region: 'Prevalent throughout India',
      regionDeva: 'संपूर्ण भारतात',
      desc: 'The standard, widely chanted recension of the Rigveda. Features the unique oral preservation with exact pitch accents (Udātta, Anudātta, Svarita).',
      descDeva: 'ऋग्वेदाची सर्वात लोकप्रिय व सध्या उपलब्ध असणारी एकमेव संपूर्ण शाखा. स्वरचिन्हांसह (उदात्त, अनुदात्त, स्वरित) पठणाची अचूक मौखिक परंपरा यात जतन केली आहे.'
    },
    {
      name: 'Bāṣkala Saṃhitā',
      deva: 'बाष्कल संहिता',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: '10 Maṇḍalas, 1,025 Sūktas, includes Khilani/Valakhilya',
      structureDeva: '१० मंडळे, १,०२५ सूक्ते, खिलसूक्ते समाविष्ट',
      region: 'Historically North & West India',
      regionDeva: 'ऐतिहासिकदृष्ट्या उत्तर व पश्चिम भारत',
      desc: 'Preserves 8 additional hymns (Vālakhilya) and other supplementary texts. Closely related to the Shakala tradition but with small textual differences.',
      descDeva: 'शाकल शाखेसारखीच पण यात अतिरिक्त \'खिलानि\' (पूरक सूक्ते) व ८ अतिरिक्त वालखिल्य सूक्ते आढळतात. काही हस्तलिखितांमध्ये ही शाखा अंशतः टिकून राहिली आहे.'
    },
    {
      name: 'Āśvalāyana Saṃhitā',
      deva: 'आश्वलायन संहिता',
      status: 'Lost Saṃhitā (Ritual texts extant)',
      statusDeva: 'संहिता लुप्त (विधी ग्रंथ उपलब्ध)',
      structure: 'Auxiliary ritual works (Shrauta & Grihya Sutras) survive',
      structureDeva: 'विधी सूत्रे आणि श्रौत सूत्रे उपलब्ध',
      region: 'Historically popular in Maharashtra & South India',
      regionDeva: 'ऐतिहासिकदृष्ट्या महाराष्ट्र व दक्षिण भारत',
      desc: 'The independent Samhita is lost, but the ritual manuals (Sutras) written by sage Ashvalayana (disciple of Shaunaka) are the primary authority for Rigvedic rites in many parts of India.',
      descDeva: 'मूळ संहिता लुप्त झाली आहे, परंतु शौनकांचे शिष्य आश्वलायन ऋषींनी लिहिलेले आश्वलायन श्रौत व गृह्य सूत्र ग्रंथ उपलब्ध आहेत. महाराष्ट्रात ऋग्वेदी ब्राह्मणांचे बहुतांश विधी याच शाखेनुसार होतात.'
    },
    {
      name: 'Śāṅkhāyana / Kauṣītaki',
      deva: 'शाङ्खायन / कौषीतकी',
      status: 'Lost Saṃhitā (Brahmana & Upanishad extant)',
      statusDeva: 'संहिता लुप्त (ब्राह्मण व उपनिषद उपलब्ध)',
      structure: 'Shrauta/Grihya Sutras, Brahmana, Aranyaka, and Upanishad survive',
      structureDeva: 'ब्राह्मण, आरण्यक, उपनिषद आणि सूत्रे उपलब्ध',
      region: 'Historically Gujarat & Rajasthan',
      regionDeva: 'ऐतिहासिकदृष्ट्या गुजरात व राजस्थान',
      desc: 'While the main mantra collection is lost, its Brahmana, Aranyaka, and Upanishad are fully preserved and form an important intellectual lineage of Rigvedic ritualism.',
      descDeva: 'मूळ मंत्रसंग्रह अनुपलब्ध असला तरी या शाखेचे कौषीतकी ब्राह्मण, आरण्यक, उपनिषद आणि शाङ्खायन विधीसूत्रे पूर्णपणे सुरक्षित आहेत. ही शाखा आंतरिक साधनेवर भर देते.'
    },
    {
      name: 'Māṇḍukāyana',
      deva: 'माण्डूकायन',
      status: 'Lost',
      statusDeva: 'पूर्णपणे लुप्त',
      structure: 'None surviving',
      structureDeva: 'सध्या कोणताही ग्रंथ उपलब्ध नाही',
      region: 'Historically Northern India',
      regionDeva: 'ऐतिहासिकदृष्ट्या उत्तर भारत',
      desc: 'Mentioned by ancient grammarians and lexicographers like Shaunaka in the Rigveda Pratisakhya, but no text or oral tradition survives today.',
      descDeva: 'शौनकांच्या ऋग्वेद प्रातिशाख्यात आणि इतर प्राचीन ग्रंथांमध्ये या शाखेचा उल्लेख आढळतो, परंतु आज याचा कोणताही ग्रंथ किंवा मौखिक परंपरा शिल्लक नाही.'
    }
  ],
  yajur: [
    {
      name: 'Vājasaneyi Mādhyandina',
      deva: 'वाजसनेयी माध्यन्दिन',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '40 Adhyāyas (chapters), 1,975 Kandikās (verses)',
      structureDeva: '४० अध्याय, १,९७५ कण्डिका/मंत्र',
      region: 'Dominant in North and Central India',
      regionDeva: 'उत्तर व मध्य भारत',
      desc: 'Named after sage Yajnavalkya (Vajasaneya) and the midday sun. It is the most popular Shukla Yajurveda recension, recited with a distinctive pronunciation where \'ya\' becomes \'ja\' and \'va\' becomes \'ba\' in specific contexts.',
      descDeva: 'याज्ञवल्क्य ऋषींनी आदित्य भगवंताकडून प्राप्त केलेली मुख्य शाखा. उत्तर व मध्य भारतात अत्यंत लोकप्रिय आहे. यात \'य\' चा उच्चार \'ज\' आणि \'ष\' चा उच्चार \'ख\' करण्याची विशिष्ट स्वर पद्धती आहे.'
    },
    {
      name: 'Vājasaneyi Kāṇva',
      deva: 'वाजसनेयी काण्व',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '40 Adhyāyas, 328 Anuvākas, 2,086 verses',
      structureDeva: '४० अध्याय, ३२८ अनुवाक, २,०८६ मंत्र',
      region: 'Popular in South India, Maharashtra, and Odisha',
      regionDeva: 'दक्षिण भारत, महाराष्ट्र व ओडिशा',
      desc: 'Prevalent in South India. It is textually very close to Madhyandina but features minor word order variations and contains 111 additional verses. It serves as the basis for the Kanva Shatapatha Brahmana.',
      descDeva: 'कण्व ऋषींच्या परंपरेतील ही शाखा दक्षिण भारतात (विशेषतः तमिळनाडू, कर्नाटक, आंध्र व महाराष्ट्र) जास्त प्रचलित आहे. यात माध्यन्दिन शाखेपेक्षा १११ मंत्र जास्त आहेत.'
    },
    {
      name: 'Taittirīya Saṃhitā',
      deva: 'तैत्तिरीय संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '7 Kāṇḍas, 44 Prapāṭhakas, 651 Anuvākas',
      structureDeva: '७ कांडे, ४४ प्रपाठक, ६५१ अनुवाक',
      region: 'Dominant across South India',
      regionDeva: 'संपूर्ण दक्षिण भारत',
      desc: 'Named after sage Tittiri. The most widely chanted and preserved Black Yajurveda school, containing both mantras and prose commentary integrated together. Famous for its beautiful, resonant chanting flow.',
      descDeva: 'तित्तिरी ऋषींच्या परंपरेतील कृष्ण यजुर्वेदाची ही सर्वात महत्त्वाची व लोकप्रिय शाखा आहे. दक्षिण भारतात (तमिळनाडू, कर्नाटक, वळवून ठेवलेली) ही शाखा खूप जिवंत आहे. यात मंत्र आणि गद्य विधी एकत्र गुंफलेले आहेत.'
    },
    {
      name: 'Maitrāyaṇī Saṃhitā',
      deva: 'मैत्रायणी संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '4 Kāṇḍas, 54 Prapāṭhakas, 3,144 mantras',
      structureDeva: '४ कांडे, ५४ प्रपाठक, ३,१४४ मंत्र',
      region: 'Preserved in Western Maharashtra and Gujarat',
      regionDeva: 'पश्चिम महाराष्ट्र व गुजरात',
      desc: 'Named after sage Maitri. It preserves archaic linguistic features and unique ritual details. Today, a small community of priests in Nashik and Nandurbar (Maharashtra) maintains its oral chanting.',
      descDeva: 'मैत्रि ऋषींनी प्रवचन केलेली कृष्ण यजुर्वेदाची ही प्राचीन शाखा आहे. गुजरात आणि महाराष्ट्रातील (विशेषतः नाशिक व नंदुरबार परिसर) काही मोजक्या घराण्यांनी ही मौखिक परंपरा अजूनही टिकवून ठेवली आहे.'
    },
    {
      name: 'Kāṭhaka / Kaṭha Saṃhitā',
      deva: 'काठक / कठ संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '5 Books, 40 Chapters',
      structureDeva: '५ भाग, ४० अध्याय',
      region: 'Historically from Kashmir & Punjab',
      regionDeva: 'ऐतिहासिकदृष्ट्या काश्मीर व पंजाब',
      desc: 'Originally flourished in Kashmir. Textually preserves ancient forms of prose commentary, containing teachings referenced by Pāṇini.',
      descDeva: 'मूळची काश्मीरमध्ये प्रचलित असणारी ही शाखा आहे. यात पाणिनीने उल्लेख केलेले प्राचीन व्याकरण आणि कथा संदर्भ जतन केले आहेत.'
    },
    {
      name: 'Kapiṣṭhala-Kaṭha',
      deva: 'कपिष्ठल-कठ संहिता',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Partially Extant',
      statusDeva: 'अंशतः उपलब्ध',
      structure: 'Fragmentary books',
      structureDeva: 'काही खंड व सुटे अध्याय उपलब्ध',
      region: 'Historically Punjab region',
      regionDeva: 'ऐतिहासिकदृष्ट्या पंजाब प्रदेश',
      desc: 'A closely related branch to the Katha school, surviving only in fragmented manuscripts. It retains very archaic accentuation systems.',
      descDeva: 'कठ शाखेशी जोडलेली ही एक अत्यंत दुर्मिळ शाखा आहे. याचे मोजकेच खंड उपलब्ध असून यातील स्वरांची पद्धत अतिशय जुनी आहे.'
    }
  ],
  sama: [
    {
      name: 'Kauthuma Saṃhitā',
      deva: 'कौथुम संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: 'Divided into Pūrvārcika (6 Prapathakas) & Uttarārcika (9 Prapathakas)',
      structureDeva: 'पूर्वार्चिक (६ प्रपाठक) आणि उत्तरार्चिक (९ प्रपाठक) अशी विभागणी',
      region: 'Gujarat, Maharashtra, and parts of Tamil Nadu',
      regionDeva: 'गुजरात, महाराष्ट्र व तमिळनाडू',
      desc: 'The most popular and widely studied recension of the Sāmaveda, dividing chants into Purvarcika and Uttararcika.',
      descDeva: 'सामवेदाची सर्वाधिक प्रचलित शाखा, जी गुजरात, महाराष्ट्र आणि दक्षिण भारतात गायली जाते. यात पूर्वार्चिक आणि उत्तरार्चिक अशी दोन मुख्य विभाजने आहेत.'
    },
    {
      name: 'Rāṇāyanīya Saṃhitā',
      deva: 'राणायनीय संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: 'Divided into Purvarcika & Uttararcika, similar to Kauthuma',
      structureDeva: 'कौथुम प्रमाणेच पूर्वार्चिक व उत्तरार्चिक विभागणी',
      region: 'Karnataka, Maharashtra, and Odisha',
      regionDeva: 'कर्नाटक, महाराष्ट्र व ओडिशा',
      desc: 'Prevalent in Karnataka, Maharashtra, and Odisha. It is textually very close to the Kauthuma branch but differs slightly in chanting style and pronunciation.',
      descDeva: 'कौथुम शाखेशी मिळतीजुळती आहे, परंतु गायन पद्धतीत, स्वरांच्या मात्रांमध्ये आणि उच्चारात किंचित फरक आहे. कर्नाटक व महाराष्ट्रातील काही भागात प्रसिद्ध आहे.'
    },
    {
      name: 'Jaiminīya / Talavakāra',
      deva: 'जैमिनीय / तलवकार',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: 'Distinct musical notation system',
      structureDeva: 'संगीत स्वरांची स्वतंत्र व प्राचीन मांडणी',
      region: 'Kerala and Tamil Nadu',
      regionDeva: 'केरळ आणि तमिळनाडू',
      desc: 'An ancient and highly distinct recension, preserved primarily in Kerala and Tamil Nadu. Its musical notation and chanting system are older and differ significantly from the Kauthuma branch.',
      descDeva: 'सामवेदाची अत्यंत प्राचीन आणि वैशिष्ट्यपूर्ण शाखा, जी प्रामुख्याने केरळ व तमिळनाडूत पारंपरिक ऋषी घराण्यांमध्ये जतन केली गेली आहे. याच्या गायनाचा वेग जास्त असतो.'
    }
  ],
  atharva: [
    {
      name: 'Śaunakīya Saṃhitā',
      deva: 'शौनकीय संहिता',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      structure: '20 Kāṇḍas (books), 730 Hymns, ~6,000 verses',
      structureDeva: '२० कांडे, ७३० सूक्ते, सुमारे ६,००० मंत्र',
      region: 'Prevalent across India',
      regionDeva: 'संपूर्ण भारतात',
      desc: 'The standard, most popular, and fully preserved recension of the Atharvaveda, comprising 20 books (kāṇḍas) containing 730 hymns.',
      descDeva: 'अथर्ववेदाची मानक आणि सर्वाधिक लोकप्रिय शाखा. यामध्ये २० कांडे आणि ७३० सूक्ते असून ती संपूर्ण भारतात अभ्यासली जाते.'
    },
    {
      name: 'Paippalāda Saṃhitā',
      deva: 'पैप्पलाद संहिता',
      status: 'Fully Extant / Recently Restored',
      statusDeva: 'पूर्णपणे उपलब्ध / नुकतीच पुनरुज्जीवित',
      structure: '20 Kāṇḍas, different order and additional hymns',
      structureDeva: '२० कांडे, भिन्न मंत्रक्रम व काही नवीन सूक्ते',
      region: 'Odisha and parts of Kashmir',
      regionDeva: 'ओडिशा व काश्मीर',
      desc: 'An older recension containing different arrangements and additional hymns. It was rediscovered in Kashmir and is actively preserved in Odisha.',
      descDeva: 'शौनकीय शाखेपेक्षा अधिक प्राचीन मानली जाणारी शाखा. हिचा शोध काश्मीरमध्ये लागला आणि सध्या ओडिशामधील काही वेदपाठशाळांमध्ये ती अत्यंत जिवंत स्वरूपात गायली जाते.'
    }
  ]
};

export const SUKTAS_DATA: Record<string, VedicTeaching[]> = {
  rig: [
    {
      name: 'Puruṣa Sūkta',
      nameDeva: 'पुरुष सूक्त',
      citation: 'RV 10.90',
      citationDeva: 'ऋग्वेद १०.९०',
      summary: 'The foundational hymn on the cosmic being (Puruṣa), describing the unity of all creation and the spiritual sacrifice that generated the universe.',
      summaryDeva: 'वैश्विक विराट पुरुषाचे वर्णन करणारे मूलभूत सूक्त. संपूर्ण सृष्टीची एकता आणि विश्वाच्या निर्मितीमागील आध्यात्मिक यज्ञाचे रहस्य यात सांगितले आहे.',
      verse: {
        deva: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥',
        trans: 'sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt |\nsa bhūmiṃ viśvato vṛtvātyatiṣṭhaddaśāṅgulam ||',
        cite: 'RV 10.90.1'
      }
    },
    {
      name: 'Nāsadīya Sūkta',
      nameDeva: 'नासदीय सूक्त',
      citation: 'RV 10.129',
      citationDeva: 'ऋग्वेद १०.१२९',
      summary: 'The famous Hymn of Creation. A profound philosophical inquiry into what existed before creation, touching upon the limits of human knowledge.',
      summaryDeva: 'सृष्टीच्या निर्मितीपूर्वी काय अस्तित्वात होते याविषयीचा अत्यंत सखोल तत्त्वज्ञानात्मक शोध. मानवी ज्ञानाच्या मर्यादांवर बोट ठेवणारे जगातील सर्वात जुने कॉस्मॉलॉजिकल काव्य.',
      verse: {
        deva: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥',
        trans: 'nāsadāsīnno sadāsīttadānīṃ nāsīdrajo no vyomā paro yat |\nkimāvarīvaḥ kuha kasya śarmannambhaḥ kimāsīdgahanaṃ gabhīram ||',
        cite: 'RV 10.129.1'
      }
    },
    {
      name: 'Saṃjñāna Sūkta',
      nameDeva: 'संज्ञान सूक्त',
      citation: 'RV 10.191',
      citationDeva: 'ऋग्वेद १०.१९१',
      summary: 'The final hymn of the Rigveda. A beautiful, powerful invocation for social harmony, unified purpose, common counsel, and mutual understanding.',
      summaryDeva: 'ऋग्वेदाचे अंतिम सूक्त. सामाजिक ऐक्य, एकमत आणि सर्वांनी मिळून एकत्र राहण्याची व सामायिक ध्येयाने काम करण्याची प्रेरणा देणारे सूक्त.',
      verse: {
        deva: 'सङ्गच्छध्वं संवदध्वं सं वो मनांसि जानताम् ।\nदेवा भागं यथा पूर्वे सञ्जानाना उपासते ॥',
        trans: 'saṅgacchadhvaṃ saṃvadadhvaṃ saṃ vo manāṃsi jānatām |\ndevā bhāgaṃ yathā pūrve sañjānānā upāsate ||',
        cite: 'RV 10.191.2'
      }
    },
    {
      name: 'Gayatri Mantra',
      nameDeva: 'गायत्री मंत्र',
      citation: 'RV 3.62.10',
      citationDeva: 'ऋग्वेद ३.६२.१०',
      summary: 'The highly revered hymn dedicated to Savitr (the sun/creative power), praying for the illumination of our intellect.',
      summaryDeva: 'बुद्धीचा विकास आणि अंतःकरणाच्या प्रदीपनासाठी सवितृ देवाकडे (सूर्याकडे) केलेली सर्वात पवित्र व वैश्विक स्तरावर लोकप्रिय प्रार्थना.',
      verse: {
        deva: 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
        trans: 'tatsaviturvareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
        cite: 'RV 3.62.10'
      }
    }
  ],
  yajur: [
    {
      name: 'Śrī Rudram (Namakam)',
      nameDeva: 'श्रीरुद्रम् (नमकम्)',
      citation: 'TS 4.5 / VS 16',
      citationDeva: 'तैत्तिरीय ४.५ / वाजसनेयी १६',
      summary: 'A grand Vedic hymn addressed to Rudra (the transformative cosmic aspect, Shiva), recognizing his presence in both benign and fierce forces of nature.',
      summaryDeva: 'निसर्गाच्या भयंकर आणि शांत अशा दोन्ही रूपांमध्ये ईश्वराचे अस्तित्व पाहणारे भगवान रुद्राची स्तुती करणारे पवित्र सूक्त. यात शिवाच्या हजारो नावांचे वर्णन आहे.',
      verse: {
        deva: 'नमस्ते रुद्र मन्यव उतो त इषवे नमः ।\nनमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः ॥',
        trans: 'namaste rudra manyava uto ta iṣave namaḥ |\nnamaste astu dhanvane bāhubhyāmuta te namaḥ ||',
        cite: 'TS 4.5.1.1'
      }
    },
    {
      name: 'Śivasaiṅkalpa Sūkta',
      nameDeva: 'शिवसङ्कल्प सूक्त',
      citation: 'VS 34.1-6',
      citationDeva: 'वाजसनेयी ३४.१-६',
      summary: 'A beautiful prayer asking that the mind—which wanders far during waking and sleep, and is the source of all action—be filled with auspicious, noble thoughts.',
      summaryDeva: 'जागृती आणि झोपेत दूरवर भटकणाऱ्या व सर्व कर्मांचा मूळ स्रोत असणाऱ्या आपल्या मनामध्ये नेहमी कल्याणकारी (शिव) विचार यावेत, यासाठी केलेली प्रार्थना.',
      verse: {
        deva: 'यज्जाग्रतो दूरमुदैति दैवं तदु सुप्तस्य तथैवैति ।\nदूरङ्गमं ज्योतिषां ज्योतिरेकं तन्मे मनः शिवसङ्कल्पमस्तु ॥',
        trans: 'yajjāgrato dūramudaiti daivaṃ tadu suptasya tathaivaiti |\ndūraṅgamaṃ jyotiṣāṃ jyotirekaṃ tanme manaḥ śivasaṅkalpamastu ||',
        cite: 'VS 34.1'
      }
    },
    {
      name: 'Mahāmṛtyuñjaya Mantra',
      nameDeva: 'महामृत्युञ्जय मंत्र',
      citation: 'TS 1.8.6 / RV 7.59.12',
      citationDeva: 'तैत्तिरीय १.८.६ / ऋग्वेद ७.५९.१२',
      summary: 'A powerful mantra seeking liberation from death and decay, comparing spiritual liberation to a cucumber detaching effortlessly from its vine.',
      summaryDeva: 'मृत्यूच्या भयापासून मुक्ती मिळवण्यासाठी भगवान शिवाची प्रार्थना करणारा मंत्र, जो संसाराच्या बंधनातून सहज मुक्त होण्याची याचना करतो.',
      verse: {
        deva: 'त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥',
        trans: 'tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam |\nurvārukamiva bandhanānmṛtyormukṣīya māmṛtāt ||',
        cite: 'TS 1.8.6.2'
      }
    },
    {
      name: 'Śānti Mantra (Shanti)',
      nameDeva: 'शान्ति मन्त्र',
      citation: 'VS 36.17',
      citationDeva: 'वाजसनेयी ३६.१७',
      summary: 'A grand invocation of peace for the entire cosmos, praying for tranquility in the sky, earth, waters, plants, trees, and the ultimate Brahman.',
      summaryDeva: 'वैश्विक शांततेची प्रार्थना, ज्यामध्ये अंतरिक्ष, पृथ्वी, जल, वनस्पती आणि परमेश्वरासह संपूर्ण ब्रह्मांडासाठी शांतीची याचना केली आहे.',
      verse: {
        deva: 'द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः ।\nवनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि ॥',
        trans: 'dyauḥ śāntirantarikṣaṃ śāntiḥ pṛthivī śāntirāpaḥ śāntiroṣadhayaḥ śāntih |\nvanaspatayaḥ śāntirviśvedevāḥ śāntirbrahma śāntiḥ sarvaṃ śāntih śāntireva śāntih sā mā śāntiredhi ||',
        cite: 'VS 36.17'
      }
    }
  ],
  sama: [
    {
      name: 'Bṛhat Sāma',
      nameDeva: 'बृहत् साम',
      citation: 'SV Gāna Tradition',
      citationDeva: 'सामवेद गान परंपरा',
      summary: 'A magnificent melody sung to express cosmic grandeur and strength. In the Bhagavad Gita (10.35), Lord Krishna declares: "Of hymns, I am the Bṛhat-sāma."',
      summaryDeva: 'वैश्विक भव्यता आणि शक्तीचे प्रदर्शन करणारे सामवेदाचे संगीत. भगवद्गीतेमध्ये (१०.३५) श्रीकृष्ण म्हणतात: "गायनात मी बृहत्-साम आहे."',
      verse: {
        deva: 'वेदानां सामवेदोऽस्मि देवानामस्मि वासवः ।\nइन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ॥',
        trans: 'vedānāṃ sāmavedo\'smi devānāmasmi vāsavaḥ |\nindriyāṇāṃ manaścāsmi bhūtānāmasmi cetanā ||',
        cite: 'Bhagavad Gītā 10.22'
      }
    },
    {
      name: 'Rathantara Sāma',
      nameDeva: 'रथन्तर साम',
      citation: 'SV 1.1.1',
      citationDeva: 'सामवेद १.१.१',
      summary: 'One of the oldest and most sacred melodies of the Sāmaveda, traditionally associated with the cosmic order (Ṛta) and the movement of the sun.',
      summaryDeva: 'सामवेदातील सर्वात जुन्या आणि पवित्र स्वरांपैकी एक, जे वैश्विक नियम (ऋत) आणि सूर्याच्या प्रवासाशी संबंधित मानले जाते.',
      verse: {
        deva: 'अग्न आ याहि वीतये गृणानो हव्यदातये ।\nनि होता सत्सि बर्हिषि ॥',
        trans: 'agna ā yāhi vītaye gṛṇāno havyadātaye |\nni hotā satsi barhiṣi ||',
        cite: 'SV 1.1.1'
      }
    },
    {
      name: 'Vāmadevya Sāma',
      nameDeva: 'वामदेव्य साम',
      citation: 'SV 1.169',
      citationDeva: 'सामवेद १.१६९',
      summary: 'A beautiful melody chanted to invoke absolute harmony, natural growth, and peace, symbolizing the vital breath (Prana) and cosmic integration.',
      summaryDeva: 'कौठुंबिक आणि सामाजिक ऐक्य व शांती प्रस्थापित करण्यासाठी गायले जाणारे सामवेदाचे अत्यंत लोकप्रिय संगीत, जे प्राण आणि विश्वाचे नाते स्पष्ट करते.',
      verse: {
        deva: 'कया नश्चित्र आ भुवदूती सदावृधः सखा ।\nकया शचिष्ठया वृता ॥',
        trans: 'kayā naścitra ā bhuvadūtī sadāvṛdhaḥ sakhā |\nkayā śaciṣṭhayā vṛtā ||',
        cite: 'SV 1.169'
      }
    }
  ],
  atharva: [
    {
      name: 'Bhūmi Sūkta (Pṛthivī Sūkta)',
      nameDeva: 'भूमि सूक्त (पृथ्वी सूक्त)',
      citation: 'AV 12.1',
      citationDeva: 'अथर्ववेद १२.१',
      summary: 'A magnificent 63-verse hymn to Mother Earth, celebrated as the world\'s earliest anthem of ecological consciousness and harmony between humans and nature.',
      summaryDeva: 'पृथ्वीमातेची स्तुती करणारे ६३ श्लोकांचे भव्य सूक्त. पर्यावरण चेतना आणि मनुष्य व निसर्ग यांच्यातील संबंध स्पष्ट करणारे जगातील पहिले निसर्गगीत मानले जाते.',
      verse: {
        deva: 'शिला भूमिरश्मा पांसुः सा भूमिः संधृता मयू ।\nतस्यै  हिरण्यवक्षसे पृथिव्या अकरं नमः ॥\nमाता भूमिः पुत्रो अहं पृथिव्याः ॥',
        trans: 'śilā bhūmi raśmā pāṃsuḥ sā bhūmiḥ saṃdhṛtā mayū |\ntasyai hiraṇyavakṣase pṛthivyā akaraṃ namaḥ ||\nmātā bhūmiḥ putro ahaṃ pṛthivyāḥ ||',
        cite: 'AV 12.1.26 / 12.1.12'
      }
    },
    {
      name: 'Prāṇa Sūkta',
      nameDeva: 'प्राण सूक्त',
      citation: 'AV 11.4',
      citationDeva: 'अथर्ववेद ११.४',
      summary: 'A profound hymn glorifying Prāṇa (the vital breath/life-force) as the supreme ruler of all beings, which animates the universe.',
      summaryDeva: 'प्राणाला (प्राणवायू/जीवनशक्ती) विश्वाचा अधिपती मानून त्याची स्तुती करणारे सूक्त, जे सजीव सृष्टीला चैतन्य प्रदान करते.',
      verse: {
        deva: 'प्राणाय नमो यस्य सर्वमिदं वशे ।\nयो भूतः सर्वस्येश्वरो यस्मिन् सर्वं प्रतिष्ठितम् ॥',
        trans: 'prāṇāya namo yasya sarvamidaṃ vaśe |\nyo bhūtaḥ sarvasyeśvaro yasmin sarvaṃ pratiṣṭhitam ||',
        cite: 'AV 11.4.1'
      }
    },
    {
      name: 'Kāla Sūkta',
      nameDeva: 'काल सूक्त',
      citation: 'AV 19.53-54',
      citationDeva: 'अथर्ववेद १९.५३-५४',
      summary: 'A profound philosophical hymn that personifies Time (Kāla) as the primordial horse, the generator of heaven and earth, and the supreme ruler of all.',
      summaryDeva: 'काळ (वेळ) या वैश्विक तत्त्वाची स्तुती करणारे सूक्त, ज्यामध्ये काळाला सर्व सृष्टीचा निर्माता, नियंत्रक आणि सर्वोच्च सत्ता मानले गेले आहे.',
      verse: {
        deva: 'कालो अश्वो वहति सप्तरश्मिः सहस्राक्षो अजरो भूरिरेताः ।\nतमारोहन्ति कवयो विपश्चितस्तस्य चक्रा भुवनानि विश्वा ॥',
        trans: 'kālo aśvo vahati saptaraśmiḥ sahasrākṣo ajaro bhūriretāḥ |\ntamārohanti kavayo vipaścitastasya cakrā bhuvanāni viśvā ||',
        cite: 'AV 19.53.1'
      }
    }
  ]
};

export const BRAHMANAS_DATA: Record<string, VedicText[]> = {
  rig: [
    {
      name: 'Aitareya Brāhmaṇa',
      deva: 'ऐतरेय ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Hotṛ (Recitant)',
      roleDeva: 'होता (मंत्र पठण करणारा)',
      structure: '40 Chapters, 8 Books (Pañcikās)',
      structureDeva: '४० अध्याय, ८ पंचिका',
      desc: 'Focuses heavily on the soma sacrifice, the fire altar, and the grand royal consecration rites (Rājasūya). Details the priestly roles of the Hotri and contains the moral allegory of Sunahshepa.',
      descDeva: 'ऋग्वेदातील सोमाभिषेक, वेदीची रचना आणि राजांच्या राज्याभिषेकाच्या (राजसूय) विधींचे वर्णन. यात \'होता\' पुरोहिताच्या जबाबदाऱ्या आणि शुनःशेपाची प्रसिद्ध कथा समाविष्ट आहे.'
    },
    {
      name: 'Kauṣītaki Brāhmaṇa (Śāṅkhāyana)',
      deva: 'कौषीतकी ब्राह्मण (शाङ्खायन)',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Hotṛ (Recitant)',
      roleDeva: 'होता (मंत्र पठण करणारा)',
      structure: '30 Chapters',
      structureDeva: '३० अध्याय',
      desc: 'Focuses on the daily fire ritual (Agnihotra), seasonal sacrifices, and domestic offerings. Explains the mystical and spiritual rationale behind each external gesture.',
      descDeva: 'दैनिक अग्नीहोत्र विधी, सणांचे यज्ञ आणि घरगुती विधींचे संकलन. प्रत्येक विधीच्या मागे असणारे गूढ आणि विश्वाचे सामंजस्य स्पष्ट करणारा ग्रंथ.'
    }
  ],
  yajur: [
    {
      name: 'Śatapatha Brāhmaṇa',
      deva: 'शतपथ ब्राह्मण',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant (Mādhyandina & Kāṇva)',
      statusDeva: 'पूर्णपणे उपलब्ध (माध्यन्दिन व काण्व)',
      role: 'Adhvaryu (Officiant)',
      roleDeva: 'अध्वर्यू (विधी करणारा)',
      structure: '100 Chapters (Mādhyandina) / 104 (Kāṇva)',
      structureDeva: '१०० अध्याय (माध्यन्दिन) / १०४ (काण्व)',
      desc: 'The largest prose work of the Vedic canon (meaning "One Hundred Paths"). Details the geometry of altars, agricultural rites, early astronomy, and historic legends like Manu and the Flood.',
      descDeva: 'वैदिक वाङ्मयातील सर्वात मोठा गद्य ग्रंथ. यात यज्ञाच्या वेदीची भूमिती, शेतीचे विधी, खगोलशास्त्र आणि मनूचा महापूर व पुरूरवा-उर्वशी यांच्या पौराणिक कथा आहेत.'
    },
    {
      name: 'Taittirīya Brāhmaṇa',
      deva: 'तैत्तिरीय ब्राह्मण',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Adhvaryu (Officiant)',
      roleDeva: 'अध्वर्यू (विधी करणारा)',
      structure: '3 Books (Ashtakas)',
      structureDeva: '३ अष्टके (भाग)',
      desc: 'Contains explanations of domestic and community rituals, the cosmic significance of sacrificial timings, and details the astronomical constellations (Nakshatras) and early dialogues of Nachiketas.',
      descDeva: 'कृष्ण यजुर्वेदाच्या तैत्तिरीय शाखेशी संबंधित विधी ग्रंथ. यात यज्ञाचे मुहूर्त ठरवण्यासाठी नक्षत्रांचे (खगोलशास्त्र) महत्त्व आणि नचिकेताच्या कथेचा सर्वात पहिला संदर्भ मिळतो.'
    }
  ],
  sama: [
    {
      name: 'Pañcaviṃśa Brāhmaṇa (Tāṇḍya)',
      deva: 'पञ्चविंश ब्राह्मण (ताण्ड्य)',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: '25 Books',
      structureDeva: '२५ अध्याय',
      desc: 'Focuses on Sāmavedic choral chants and melodies. Details purification rituals like Vrātyastoma to readmit those who have strayed from the Vedic lifestyle back into society.',
      descDeva: 'सामवेदाचे २५ भाग असणारा मुख्य ब्राह्मण ग्रंथ. यात कर्मांमधील चुकांचे प्रायश्चित्त विधी आणि आचरणातून सुटलेल्या लोकांना समाजात पुन्हा सामावून घेणारे व्रात्यस्तोम विधी आहेत.'
    },
    {
      name: 'Ṣaḍviṃśa Brāhmaṇa',
      deva: 'षड्विंश ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: '5 Chapters (serves as 26th book)',
      structureDeva: '५ अध्याय (२६वा भाग)',
      desc: 'An appendix to the Pancavimsha. Its final part (Adbhuta Brahmana) is the earliest Indic text discussing unfavorable astrological signs, earthquakes, dreams, and their remedies.',
      descDeva: 'पंचविंश ब्राह्मणाचा पूरक ग्रंथ. यातील शेवटचा \'अद्भुत\' भाग भूकंप, उलकापात किंवा वाईट स्वप्ने यांसारख्या नैसर्गिक व दैवी अरिष्टांचे निवारण करण्यासाठी शांती विधी सांगतो.'
    },
    {
      name: 'Jaiminīya Brāhmaṇa',
      deva: 'जैमिनीय ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: '3 Books',
      structureDeva: '३ भाग',
      desc: 'A vast depository of legends and stories about sages. Explains the origin, tuning, and metaphysical powers of specific musical pitches and Sāman melodies.',
      descDeva: 'साम स्वरांच्या ताकदीचे आणि गायन करणाऱ्या ऋषींचे प्राचीन इतिहास व आख्यायिका सांगणारा एक अत्यंत समृद्ध आणि अभ्यासपूर्ण ग्रंथ.'
    },
    {
      name: 'Sāmavidhāna Brāhmaṇa',
      deva: 'सामविधान ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: '3 Prapathakas',
      structureDeva: '३ प्रपाठक',
      desc: 'Prescribes which specific Sāman chants to employ for particular ritual and spiritual purposes. Acts as a practical manual linking melodies to their intended effects — from healing ailments to invoking rain.',
      descDeva: 'विशिष्ट विधी व आध्यात्मिक हेतूंसाठी कोणते साम गान करावे हे सांगणारा ग्रंथ. रोगनिवारण, वर्षा आवाहन इत्यादी उद्देशांना अनुरूप स्वरांची निवड करणारा व्यावहारिक विधी-पुस्तिका.'
    },
    {
      name: 'Ārṣeya Brāhmaṇa',
      deva: 'आर्षेय ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: 'Catalog text',
      structureDeva: 'सूचिपत्र ग्रंथ',
      desc: 'Catalogs the Ṛṣis (seers/composers) associated with each Sāman melody. Serves as a reference index linking every chant to its founding sage and providing the lineage of authorship.',
      descDeva: 'प्रत्येक साम स्वराशी संबंधित ऋषी (द्रष्टा/रचनाकार) यांची सूची देणारा ग्रंथ. प्रत्येक गानाचे मूळ कोणत्या ऋषींनी प्रकट केले याचा संदर्भ सूचिपत्र.'
    },
    {
      name: 'Devatādhyāya Brāhmaṇa',
      deva: 'देवताध्याय ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: 'Catalog text',
      structureDeva: 'सूचिपत्र ग्रंथ',
      desc: 'Lists the presiding deity (Devatā) for each Sāman chant. A companion text to the Ārṣeya Brāhmaṇa — while the latter identifies the seer, this text identifies the divine patron of each melody.',
      descDeva: 'प्रत्येक साम गानाची अधिष्ठात्री देवता (देवता) कोणती आहे ते सांगणारा ग्रंथ. आर्षेय ब्राह्मणाचा जोडीदार ग्रंथ — एक ऋषी सांगतो, तर हा देवता सांगतो.'
    },
    {
      name: 'Vaṃśa Brāhmaṇa',
      deva: 'वंश ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: 'Single chapter',
      structureDeva: 'एकल अध्याय',
      desc: 'Preserves the guru-śiṣya paramparā (teacher-student lineage) of the Sāmaveda tradition. Considered the oldest surviving record of an Indian intellectual lineage, tracing the chain of transmission across generations.',
      descDeva: 'सामवेद परंपरेतील गुरु-शिष्य परंपरा (गुरू-शिष्य शृंखला) जतन करणारा ग्रंथ. भारतीय बौद्धिक वंशवृक्षाची सर्वात जुनी नोंद मानला जातो.'
    },
    {
      name: 'Mantra Brāhmaṇa (Chāndogya)',
      deva: 'मंत्र ब्राह्मण (छान्दोग्य)',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: '2 Prapathakas',
      structureDeva: '२ प्रपाठक',
      desc: 'Explains the chants and mantras used in domestic ceremonies — marriage (vivāha), funeral (antyeṣṭi), and other sacraments (saṃskāras). Bridges the gap between Vedic ritual and household life.',
      descDeva: 'गृह्य संस्कारांमध्ये — विवाह, अंत्येष्टी आणि इतर संस्कारांमध्ये — वापरल्या जाणाऱ्या मंत्र व गानांचे स्पष्टीकरण देणारा ग्रंथ. वैदिक विधी आणि गृहस्थ जीवन यांना जोडणारा दुवा.'
    },
    {
      name: 'Saṃhitopaniṣad Brāhmaṇa',
      deva: 'संहितोपनिषद् ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Chanter)',
      roleDeva: 'उद्गाता (गायन करणारा)',
      structure: '5 Chapters',
      structureDeva: '५ अध्याय',
      desc: 'Deals with the phonetic rules of combining (sandhi) Sāman syllables during continuous chanting. Treats the science of phonetics (śikṣā) as a spiritual discipline, uniting sound and meditation.',
      descDeva: 'सामगान करताना अक्षरांच्या संधी नियमांचे (स्वर जोडणी) विवेचन करणारा ग्रंथ. उच्चारशास्त्राला (शिक्षा) एक आध्यात्मिक साधना मानून ध्वनी आणि ध्यान यांचे ऐक्य साधतो.'
    }
  ],
  atharva: [
    {
      name: 'Gopatha Brāhmaṇa',
      deva: 'गोपथ ब्राह्मण',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Brahman (Overseer)',
      roleDeva: 'ब्रह्मा (यज्ञाचा रक्षक)',
      structure: '2 Parts (Pūrva & Uttara)',
      structureDeva: '२ भाग (पूर्व व उत्तर)',
      desc: 'The only surviving Brāhmaṇa of the Atharvaveda. Focuses on the role of the supervising Brahman priest who checks and corrects ritual errors. Explains the mystical meaning of the Om syllable and the creation of speech.',
      descDeva: 'अथर्ववेदाचा एकमेव उपलब्ध ब्राह्मण ग्रंथ. यात यज्ञाचे नियंत्रण आणि चुकीच्या स्वरांचे प्रायश्चित्त विधी करणाऱ्या \'ब्रह्मा\' पुरोहिताचे कार्य आणि प्रणव ॐ काराचे महत्त्व दिले आहे.'
    }
  ]
};

export const BRAHMANAS_TEACHINGS_DATA: Record<string, VedicTeaching[]> = {
  rig: [
    {
      name: 'Legend of Śunaḥśepa',
      nameDeva: 'शुनःशेप आख्यायिका',
      citation: 'AB 7.13-18',
      citationDeva: 'ऐतरेय ७.१३-१८',
      summary: 'A moral legend highlighting absolute devotion to Varuna and the devas. Demonstrates that sincere prayer and chanting are superior to physical sacrifices.',
      summaryDeva: 'सत्यवचन आणि देवांवरील विश्वासाची एक प्राचीन कथा. कठीण प्रसंगात केवळ वरुणाची स्तुती करून शुनःशेपाने स्वतःची सुटका करून घेतली, ज्याने नामस्मरणाचे सामर्थ्य सिद्ध केले.',
      verse: {
        deva: 'ऋचां त्वचमुपमञ्जरीं मन्यन्त एते समाम्नायाः ।\nतस्माच्छ्रेष्ठतमो लोके पुरुषः सत्यमुच्यते ॥',
        trans: 'ṛcāṃ tvacamupamañjarīṃ manyante ete samāmnāyāḥ |\ntasmācchreṣṭhatamo loke puruṣaḥ satyamucyate ||',
        cite: 'AB 7.15'
      }
    },
    {
      name: 'Royal Consecration (Rājasūya)',
      nameDeva: 'राज्याभिषेक (राजसूय)',
      citation: 'AB 7.1-8.4',
      citationDeva: 'ऐतरेय ७.१–८.४',
      summary: 'The elaborate ritual for consecrating a king. Details the 16-step ceremony where the monarch is ritually reborn and empowered by cosmic forces, establishing the divine right to rule.',
      summaryDeva: 'राज्याभिषेक विधीचे विस्तृत वर्णन. राजाचा दैवी अधिकाराने पुनर्जन्म आणि वैश्विक शक्तींकडून सामर्थ्य प्रदान करणारी १६ टप्प्यांची विधी.',
      verse: {
        deva: 'अभिषिच्यतेऽयं राजा सोमेन साम्राज्येन ।\nस देवानां प्रियो भवति ॥',
        trans: 'abhiṣicyate\'yaṃ rājā somena sāmrājyena |\nsa devānāṃ priyo bhavati ||',
        cite: 'AB 8.4'
      }
    },
    {
      name: 'The Three Fires (Agnitraya)',
      nameDeva: 'तीन अग्नी (अग्नित्रय)',
      citation: 'AB 1.1',
      citationDeva: 'ऐतरेय १.१',
      summary: 'Explains the cosmic correspondence of the three ritual fires — Gārhapatya (household), Āhavanīya (offering), and Dakṣiṇa (southern/ancestral) — with earth, heaven, and atmosphere respectively.',
      summaryDeva: 'तीन यज्ञीय अग्नींचे विश्वाशी असणारे नाते — गार्हपत्य अग्नी (पृथ्वी), आहवनीय अग्नी (स्वर्ग), आणि दक्षिण अग्नी (अंतरिक्ष) — यांचे विवेचन.',
      verse: {
        deva: 'गार्हपत्यो वै पृथिवी आहवनीयो द्यौः दक्षिणाग्निरन्तरिक्षम् ।',
        trans: 'gārhapatyo vai pṛthivī āhavanīyo dyauḥ dakṣiṇāgnirantarikṣam |',
        cite: 'AB 1.1'
      }
    },
    {
      name: 'Agnihotra as Inner Worship',
      nameDeva: 'अग्निहोत्र — अंतर्यागाचे तत्त्व',
      citation: 'KB 2.5',
      citationDeva: 'कौषीतकी २.५',
      summary: 'The Kauṣītaki Brāhmaṇa\'s teaching that the daily fire ritual (Agnihotra) is not merely an external act but a meditation on the vital breath (Prāṇa) and the cosmic rhythms of sunrise and sunset.',
      summaryDeva: 'दैनिक अग्निहोत्र हा केवळ बाह्य विधी नसून प्राणवायू (प्राण) आणि सूर्योदय-सूर्यास्ताच्या विश्वव्यापी लयींवरील ध्यान आहे, असे कौषीतकी ब्राह्मणाचे शिक्षण.',
      verse: {
        deva: 'प्राणो वा अग्निहोत्रम् । प्राणे हूयमाने सर्वाणि भूतानि हूयन्ते ।',
        trans: 'prāṇo vā agnihotram | prāṇe hūyamāne sarvāṇi bhūtāni hūyante |',
        cite: 'KB 2.5'
      }
    }
  ],
  yajur: [
    {
      name: 'Manu and the Flood',
      nameDeva: 'मनू आणि महापूर',
      citation: 'SB 1.8.1',
      citationDeva: 'शतपथ १.८.१',
      summary: 'The earliest Indic account of a global deluge. Manu shelters a tiny fish that grows to guide his ship to safety amidst the rising waters.',
      summaryDeva: 'जागतिक जलप्रलयाचा सर्वात पहिला भारतीय लिखित पुरावा. मनूने एका लहान माशाला (मत्स्यावतार) वाचवले, ज्याने नंतर मनूच्या जहाजाला पुरामध्ये हिमालयाकडे नेले.',
      verse: {
        deva: 'मनवे ह वै प्रातर्हस्तेऽवनेग्यमुदकमाहरन् ।\nतस्य ह हस्त आवनेग्यमुदकमानिन्युस्तत्र मत्स्यः समाबभूव ॥',
        trans: 'manave ha vai prātahaste\'vanēgyamudakamāharan |\ntasya ha hasta āvanēgyamudakamāninyustatra matsyaḥ samābabhūva ||',
        cite: 'SB 1.8.1.1'
      }
    },
    {
      name: 'Purūravas and Urvaśī',
      nameDeva: 'पुरूरवा आणि उर्वशी',
      citation: 'SB 11.5.1',
      citationDeva: 'शतपथ ११.५.१',
      summary: 'The poignant love story of mortal king Purūravas and celestial nymph Urvaśī. One of the oldest surviving dramatic narratives in world literature, later retold by Kālidāsa.',
      summaryDeva: 'मानवी राजा पुरूरवा आणि अप्सरा उर्वशी यांच्या प्रेमकथेचे जगातील सर्वात पुरातन लिखित नाट्यमय आख्यान. कालिदासाच्या \'विक्रमोर्वशीय\' नाटकाचा मूळ स्रोत.',
      verse: {
        deva: 'उर्वशी ह वै अप्सरा पुरूरवसमैडमभिवव्राज ।\nसा हास्मै प्रतिजज्ञे ॥',
        trans: 'urvaśī ha vai apsarā purūravasamaiḍamabhivvavrāja |\nsā hāsmai pratijajñe ||',
        cite: 'SB 11.5.1.1'
      }
    },
    {
      name: 'The Agnicayana (Fire Altar)',
      nameDeva: 'अग्निचयन (अग्निवेदी)',
      citation: 'SB 6.1-9.5',
      citationDeva: 'शतपथ ६.१–९.५',
      summary: 'The monumental description of constructing the great fire altar in the shape of a cosmic eagle (Śyena). Encodes advanced geometry including early forms of the Pythagorean theorem.',
      summaryDeva: 'श्येन (गरुड) आकाराच्या अग्निवेदीच्या बांधणीचे विस्तृत वर्णन. यात प्राचीन भूमिती (पायथागोरियन प्रमेयाचे पूर्वरूप) अंतर्भूत आहे.',
      verse: {
        deva: 'प्रजापतिर्वा इदमग्र एक एवास ।\nसोऽकामयत बहु स्यां प्रजायेयेति ।\nस तपोऽतप्यत ॥',
        trans: 'prajāpatirvā idamagra eka evāsa |\nso\'kāmayata bahu syāṃ prajāyeyeti |\nsa tapo\'tapyata ||',
        cite: 'SB 6.1.1.1'
      }
    },
    {
      name: 'Prajāpati\'s Self-Creation',
      nameDeva: 'प्रजापतीची स्व-निर्मिती',
      citation: 'SB 6.1.1',
      citationDeva: 'शतपथ ६.१.१',
      summary: 'Prajāpati (the creator) produces the universe through intense austerity (Tapas). After creation, he feels exhausted and disintegrated, and the ritual fire altar reconstructs him — a powerful metaphor for cosmic renewal.',
      summaryDeva: 'प्रजापतीने तपश्चर्येद्वारे (तपस्) विश्वाची निर्मिती केली. निर्मितीनंतर ते विघटित झाले आणि अग्निवेदी विधीने त्यांची पुनर्रचना केली — वैश्विक पुनर्निर्मितीचे सामर्थ्यशाली रूपक.',
      verse: {
        deva: 'प्रजापतिरकामयत प्रजायेयेति ।\nस तपोऽतप्यत ।\nस तपस्तप्त्वा इदं सर्वमसृजत यदिदं किं च ॥',
        trans: 'prajāpatir akāmayata prajāyeyeti |\nsa tapo\'tapyata |\nsa tapas taptvā idaṃ sarvam asṛjata yad idaṃ kiṃ ca ||',
        cite: 'SB 6.1.1.1'
      }
    },
    {
      name: 'Nachiketas\'s First Appearance',
      nameDeva: 'नचिकेताचा सर्वप्रथम उल्लेख',
      citation: 'TB 3.11.8',
      citationDeva: 'तैत्तिरीय ब्रा. ३.११.८',
      summary: 'The earliest reference to the Nachiketas legend. A young boy, given to Death by his father\'s rash vow, becomes the prototype of the fearless seeker of truth — later elaborated in the Kaṭha Upaniṣad.',
      summaryDeva: 'नचिकेत कथेचा सर्वप्रथम उल्लेख. वडिलांच्या क्रोधाने यमलोकी गेलेला बालक सत्यशोधकाचा आदर्श बनतो — ही कथा पुढे कठोपनिषदात विस्ताराने सांगितली आहे.',
      verse: {
        deva: 'नचिकेता ह वै गौतमः पितरं प्रोवाच ।\nतत कस्मै मां दास्यतीति ।\nमृत्यवे त्वा ददामीति ॥',
        trans: 'naciketā ha vai gautamaḥ pitaraṃ provāca |\ntat kasmai māṃ dāsyatīti |\nmṛtyave tvā dadāmīti ||',
        cite: 'TB 3.11.8.1'
      }
    }
  ],
  sama: [
    {
      name: 'Melodic Conquest',
      nameDeva: 'साम स्वरांचा विजय',
      citation: 'PB 6.1',
      citationDeva: 'पञ्चविंश ६.१',
      summary: 'Explains how the devas vanquished chaotic forces not with physical armor, but by matching the musical notes and frequencies of the Sāmans.',
      summaryDeva: 'देवाने असुरांवर विजय मिळवण्यासाठी शस्त्रांऐवजी सामवेदातील सप्तस्वरांच्या मधुर लहरींचा आणि लयीचा कसा उपयोग केला, याचे आध्यात्मिक वर्णन.',
      verse: {
        deva: 'देवा वै सामभिः सर्वांल्लभन्त ।\nतस्मात् सामगानं परमं साधनमुच्यते ॥',
        trans: 'devā vai sāmabhiḥ sarvāṃllabhanta |\ntasmāt sāmagānaṃ paramaṃ sādhanamucyate ||',
        cite: 'PB 6.1.2'
      }
    },
    {
      name: 'Vrātyastoma (Readmission Rite)',
      nameDeva: 'व्रात्यस्तोम (पुनःप्रवेश विधी)',
      citation: 'PB 17.1-4',
      citationDeva: 'पञ्चविंश १७.१–४',
      summary: 'The remarkable ritual for readmitting Vrātyas (those who had fallen outside the Vedic fold) back into society. One of the earliest concepts of social reintegration and redemption in world literature.',
      summaryDeva: 'वैदिक आचरणातून बाहेर पडलेल्या व्रात्यांना पुन्हा समाजात स्वीकारण्याचा विधी. सामाजिक पुनर्एकत्रीकरण आणि प्रायश्चित्ताची जगातील सर्वात जुनी संकल्पना.',
      verse: {
        deva: 'व्रात्यस्तोमेन वै देवा व्रात्यानभ्यवर्तयन् ।\nते पुनर्वेदमविशन् ॥',
        trans: 'vrātyastomena vai devā vrātyān abhyavartayan |\nte punar vedam aviśan ||',
        cite: 'PB 17.1.2'
      }
    },
    {
      name: 'Adbhuta (Ominous Portents)',
      nameDeva: 'अद्भुत (अरिष्ट लक्षणे)',
      citation: 'ŚB 5.1-5',
      citationDeva: 'षड्विंश ५.१–५',
      summary: 'The Ṣaḍviṃśa Brāhmaṇa\'s fascinating final section (Adbhuta Brāhmaṇa) cataloging earthquakes, eclipses, unusual animal behavior, and dreams as cosmic signals, with prescribed Śānti rituals to avert calamity.',
      summaryDeva: 'भूकंप, ग्रहण, प्राण्यांचे विचित्र वर्तन आणि स्वप्ने यांसारख्या अरिष्टांचे सविस्तर वर्गीकरण आणि त्यांच्या निवारणासाठी शांती विधींचे विधान.',
      verse: {
        deva: 'अथ यदद्भुतानि प्रादुर्भवन्ति ।\nतेषां शान्तिं कुर्वीत ॥',
        trans: 'atha yad adbhutāni prādurbhavanti |\nteṣāṃ śāntiṃ kurvīta ||',
        cite: 'ŚB 5.1'
      }
    },
    {
      name: 'Origin of the Seven Musical Notes',
      nameDeva: 'सप्तस्वरांची उत्पत्ती',
      citation: 'JB 1.1.1',
      citationDeva: 'जैमिनीय १.१.१',
      summary: 'The Jaiminīya Brāhmaṇa\'s account of how the seven musical notes (saptasvara) emerged from the cosmic sacrifice, linking the Indian musical octave to Vedic ritual cosmology.',
      summaryDeva: 'सप्तस्वरांची (सा रे ग म प ध नी) उत्पत्ती वैश्विक यज्ञातून कशी झाली याचे आध्यात्मिक वर्णन. भारतीय संगीत आणि वैदिक विश्वविज्ञान यांना जोडणारे मूलभूत शिक्षण.',
      verse: {
        deva: 'प्रजापतिर्यज्ञमसृजत ।\nतस्माद्वाक्सृष्टा सामाभवत् ।\nसामगानात् सप्तस्वराः प्रादुर्भवन् ॥',
        trans: 'prajāpatir yajñam asṛjata |\ntasmād vāk sṛṣṭā sāmābhavat |\nsāmagānāt saptasvarāḥ prādurbhavan ||',
        cite: 'JB 1.1.1'
      }
    }
  ],
  atharva: [
    {
      name: 'Gayatri as Vedic Mother',
      nameDeva: 'गायत्री - वेदांची माता',
      citation: 'GB 1.1.38',
      citationDeva: 'गोपथ १.१.३८',
      summary: 'Exalts the Gayatri mantra as the absolute source from which the four Vedas emerged, framing it as the starting point of wisdom.',
      summaryDeva: 'गायत्री मंत्र हा चारही वेदांचा मुख्य स्रोत असून तो सर्व ज्ञानाचे उगमस्थान आहे, हे सिद्ध करणारी गोपथ ब्राह्मणातील प्रमुख स्तुती.',
      verse: {
        deva: 'ओङ्कारं पृच्छामः कोऽयं धातुः किं प्रातिपदिकं किमक्षरम् ।\nतस्माद् गायत्री वेदानां माता संबभूव ॥',
        trans: 'oṅkāraṃ pṛcchāmaḥ ko\'yaṃ dhātuḥ kiṃ prātipadikaṃ kimakṣaram |\ntasmād gāyatrī vedānāṃ mātā saṃbabhūva ||',
        cite: 'GB 1.1.38'
      }
    },
    {
      name: 'The Brahman Priest\'s Vigil',
      nameDeva: 'ब्रह्मा पुरोहिताचे मौन निरीक्षण',
      citation: 'GB 1.2.1-18',
      citationDeva: 'गोपथ १.२.१–१८',
      summary: 'Explains the unique role of the Brahman priest — the silent fourth officiant who oversees the entire sacrifice without performing any active role, but who corrects errors through mental mantras.',
      summaryDeva: 'ब्रह्मा पुरोहिताची अनन्यसाधारण भूमिका — यज्ञाचे मूक निरीक्षण करून चुकांचे प्रायश्चित्त मानसिक मंत्रांनी करणारा चौथा ऋत्विक. बाह्य कर्माविना अंतर्शक्तीने यज्ञाचे संरक्षण.',
      verse: {
        deva: 'ब्रह्मा वाव यज्ञस्य दक्षिणतो निषीदति ।\nस मनसा यज्ञमभिरक्षति ॥',
        trans: 'brahmā vāva yajñasya dakṣiṇato niṣīdati |\nsa manasā yajñam abhirakṣati ||',
        cite: 'GB 1.2.1'
      }
    },
    {
      name: 'Praṇava (Om) as Seed of Creation',
      nameDeva: 'प्रणव (ॐ) — सृष्टीचे बीज',
      citation: 'GB 1.1.1-25',
      citationDeva: 'गोपथ १.१.१–२५',
      summary: 'The Gopatha Brāhmaṇa\'s teaching that the syllable Om preceded all creation and is the acoustic seed from which the four Vedas, all speech, and the entire cosmos emanated.',
      summaryDeva: 'ॐ (प्रणव) हा सृष्टीपूर्वी अस्तित्वात होता आणि त्या ध्वनिबीजापासून चारही वेद, सर्व वाणी आणि संपूर्ण विश्वाचा उगम झाला, हे गोपथ ब्राह्मणाचे मूलभूत शिक्षण.',
      verse: {
        deva: 'ओमित्येतदक्षरमिदं सर्वम् ।\nतस्माद्ओमिति ब्राह्मणः प्रवक्ष्यन्नाह ।\nओमित्याश्रावयति ॥',
        trans: 'om ity etad akṣaram idaṃ sarvam |\ntasmād om iti brāhmaṇaḥ pravakṣyann āha |\nom ity āśrāvayati ||',
        cite: 'GB 1.1.1'
      }
    }
  ]
};

export const ARANYAKAS_DATA: Record<string, VedicText[]> = {
  rig: [
    {
      name: 'Aitareya Āraṇyaka',
      deva: 'ऐतरेय आरण्यक',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Hotṛ (Forest Meditator)',
      roleDeva: 'होता (अरण्य चिंतन करणारा)',
      structure: '5 Aranyakas (Books)',
      structureDeva: '५ मुख्य भाग',
      desc: 'Discusses the symbolic meaning of the Mahāvrata ritual. Transitions from external fire sacrifices to internal meditation on the vital breath (Prāṇa) as the cosmic pillar.',
      descDeva: 'महाव्रत नावाच्या प्राचीन विधीचा आध्यात्मिक अर्थ. बाह्य यज्ञ सोडून अरण्यात राहणाऱ्या साधकांसाठी प्राणवायूला अंतिम ब्रह्माचा आधार मानून केलेले चिंतन.'
    },
    {
      name: 'Kauṣītaki Āraṇyaka (Śāṅkhāyana)',
      deva: 'कौषीतकी आरण्यक (शाङ्खायन)',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Hotṛ (Forest Meditator)',
      roleDeva: 'होता (अरण्य चिंतन करणारा)',
      structure: '15 Chapters',
      structureDeva: '१५ अध्याय',
      desc: 'Focuses on the internal fire sacrifice (Antar-Agnihotra), where the breath and mind act as the offerings and the self is the fire.',
      descDeva: 'अंतर्गत यज्ञ संकल्पना (अंतर्-अग्नीहोत्र). यात बाह्य अग्नीऐवजी स्वतःच्या शरीराला यज्ञवेदी मानून विचार व प्राणाची आहुती दिली जाते.'
    }
  ],
  yajur: [
    {
      name: 'Bṛhadāraṇyaka',
      deva: 'बृहदारण्यक',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Adhvaryu (Forest Meditator)',
      roleDeva: 'अध्वर्यू (अरण्य चिंतन करणारा)',
      structure: '6 Chapters',
      structureDeva: '६ अध्याय',
      desc: 'The "Great Forest Text" found at the close of the Satapatha Brahmana. Interprets the horse sacrifice cosmically and introduces early concepts of karma and transmigration.',
      descDeva: 'शतपथ ब्राह्मणाचा अंतिम भाग. यात अश्वमेधासारख्या विशाल विज्ञानाला आध्यात्मिक व ब्रह्मांडीय रूपात मांडले असून कर्माच्या सिद्धांतांची सुरुवात केली आहे.'
    },
    {
      name: 'Taittirīya Āraṇyaka',
      deva: 'तैत्तिरीय आरण्यक',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Adhvaryu (Forest Meditator)',
      roleDeva: 'अध्वर्यू (अरण्य चिंतन करणारा)',
      structure: '10 Chapters (Prapathakas)',
      structureDeva: '१० प्रपाठक',
      desc: 'Contains details of internal sacrifices, rules of Yajñopavīta (sacred thread), daily prayers (Sandhyāvandana), and the famous Mahānārāyaṇa portion which praises the supreme soul.',
      descDeva: 'यात यज्ञोपवीत विधी, रोज करावयाचे संध्यावंदन आणि वैश्विक शक्तीचे स्मरण करणारे अत्यंत प्रसिद्ध असे महानारायण सूक्त आहे.'
    }
  ],
  sama: [
    {
      name: 'Chāndogya Āraṇyaka',
      deva: 'छान्दोग्य आरण्यक',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Forest Meditator)',
      roleDeva: 'उद्गाता (अरण्य चिंतन करणारा)',
      structure: 'Forms initial part of Chandogya Upanishad',
      structureDeva: 'छान्दोग्य उपनिषदाचे सुरुवातीचे भाग',
      desc: 'Details meditation on the sacred chant Om (Pranava) and links the musical pitch of Sāman singing to the planetary cycles and seasonal winds.',
      descDeva: 'ॐ (प्रणव) अक्षराचे अरण्य चिंतन. यात संगीत स्वर आणि निसर्गाचे ऋतू चक्र यांच्यातील एकात्मतेचे सविस्तर वर्णन केले आहे.'
    },
    {
      name: 'Talavakāra Āraṇyaka (Jaiminīya Upaniṣad Brāhmaṇa)',
      deva: 'तलवकार आरण्यक (जैमिनीय उपनिषद ब्राह्मण)',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Forest Meditator)',
      roleDeva: 'उद्गाता (अरण्य चिंतन करणारा)',
      structure: '4 Chapters',
      structureDeva: '४ प्रपाठक',
      desc: 'Discusses the correspondences of speech, vital breath, and sound. It transitions directly into the famous Kena Upanishad.',
      descDeva: 'मानवी वाणी, श्वास आणि संगीतातील नाद यांचा सृष्टीशी असलेला गूढ संबंध. हा भाग पुढे केनोपनिषदाचे मुख्य तत्त्वज्ञान तयार करतो.'
    }
  ],
  atharva: [
    {
      name: 'No Independent Āraṇyaka',
      deva: 'स्वतंत्र आरण्यक नाही',
      status: 'No Surviving Text',
      statusDeva: 'कोणताही स्वतंत्र ग्रंथ नाही',
      structure: 'N/A',
      structureDeva: 'लागू नाही',
      desc: 'The Atharvaveda has no surviving independent Āraṇyaka text. Its transition from ritual directly to philosophy is preserved in the Gopatha Brāhmaṇa.',
      descDeva: 'अथर्ववेदाचा कोणताही स्वतंत्र आरण्यक ग्रंथ उपलब्ध नाही. या वेदातील कर्मकांडाचे संक्रमण थेट गोपथ ब्राह्मणातून उपनिषदांच्या अंतिम तत्त्वज्ञानाकडे होते.'
    }
  ]
};

export const ARANYAKAS_TEACHINGS_DATA: Record<string, VedicTeaching[]> = {
  rig: [
    {
      name: 'Prāṇa as Cosmic Support',
      nameDeva: 'प्राण - वैश्विक आधार',
      citation: 'AA 2.1.8',
      citationDeva: 'ऐतरेय आरण्यक २.१.८',
      summary: 'Sage Mahidasa Aitareya instructs that the vital breath (Prana) is the internal support of the body, just as the sun supports the sky.',
      summaryDeva: 'महिदास ऐतरेय ऋषींचा उपदेश की, जसा सूर्य आकाशाचा आधार आहे, तसाच प्राण हा आपल्या मानवी शरीराचा मुख्य प्राण आणि अंतर्गत ऊर्जा आहे.',
      verse: {
        deva: 'प्राणो वै शरीरस्य स्तम्भः ।\nयो वै प्राणं ब्रह्मेति वेदास्य देवा वशमायन्ति ॥',
        trans: 'prāṇo vai śarīrasya stambhaḥ |\nyo vai prāṇaṃ brahmeti vedāsya devā vaśamāyanti ||',
        cite: 'AA 2.1.8'
      }
    }
  ],
  yajur: [
    {
      name: 'Macrocosmic Horse',
      nameDeva: 'विराट अश्व रूपक',
      citation: 'BA 1.1',
      citationDeva: 'बृहदारण्यक १.१',
      summary: 'A meditation where the sacrificial horse is seen as the cosmos itself: dawn is its head, wind is its breath, and the stars are its body.',
      summaryDeva: 'यज्ञातील घोड्याला संपूर्ण सृष्टीचे रूप मानून चिंतन: पहाट हे त्याचे डोके, सूर्य हा डोळा आणि नक्षत्रे हे त्याचे शरीर आहे, अशी कल्पना.',
      verse: {
        deva: 'उषा वा अश्वस्य मेध्यस्य शिरः ।\nसूर्यश्चक्षुर्वातः प्राणो व्यात्तमग्निवैश्वानरः ॥',
        trans: 'uṣā vā aśvasya medhyasya śiraḥ |\nsūryāścakṣurvātaḥ prāṇo vyāttamagnirvaiśvānaraḥ ||',
        cite: 'BA 1.1.1'
      }
    }
  ],
  sama: [
    {
      name: 'Om as Immortal Sound',
      nameDeva: 'अमर नाद ॐ',
      citation: 'TA 1.1 (JUB)',
      citationDeva: 'तलवकार आरण्यक १.१',
      summary: 'Meditation on Om as the source of all human speech and the immortal essence of cosmic energy.',
      summaryDeva: 'ॐ काराच्या उच्चारात विश्वाची निर्मिती करणारी पहिली स्पंदने सामावली आहेत, या विश्वासाने साधकांनी अंतःकरणात त्याचे ध्यान करावे.',
      verse: {
        deva: 'ओमित्येतदक्षरमुद्गीथमुपासीत ।\nतस्योपव्याख्यानं सर्वं हि वाङ् मयम् ॥',
        trans: 'omityetadakṣaramudgīthamupāsīta |\ntasyopavyākhyānaṃ sarvaṃ hi vāṅ mayam ||',
        cite: 'TA 1.1.1'
      }
    }
  ],
  atharva: [
    {
      name: 'Transition to Wisdom',
      nameDeva: 'ज्ञानाकडे मार्गक्रमण',
      citation: 'AV Tradition',
      citationDeva: 'अथर्ववेद परंपरा',
      summary: 'In the absence of an Aranyaka, the Atharvaveda emphasizes that physical actions are merely preparation for inner wisdom (Tapas).',
      summaryDeva: 'अरण्यकांचा अभाव असल्यामुळे शारीरिक विधींकडून थेट अंतर्गत तपाकडे (आत्मज्ञानाकडे) वळण्याचा मार्ग यात स्पष्ट दिसतो.',
      verse: {
        deva: 'तपसा चीयते ब्रह्म ततोऽन्नमभिजायते ।\nअन्नात् प्राणो मनः सत्यं लोकाः कर्मसु चामृतम् ॥',
        trans: 'tapasā cīyate brahma tato\'nnamabhijāyate |\nannāt prāṇo mana\u0027s satyaṃ lokāḥ karmasu cāmṛtam ||',
        cite: 'Mundaka 1.1.8'
      }
    }
  ]
};

export const UPANISHADS_DATA: Record<string, VedicText[]> = {
  rig: [
    {
      name: 'Aitareya Upaniṣad',
      deva: 'ऐतरेय उपनिषद्',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Hotṛ (Vedānta Sage)',
      roleDeva: 'होता (वेदांत ऋषी)',
      structure: '3 Chapters, 33 Verses',
      structureDeva: '३ अध्याय, ३३ श्लोक',
      desc: 'Focuses on the creation of the cosmos from the absolute Self. Contains the famous Mahāvākya "Prajñānaṃ Brahma" (Consciousness is Brahman).',
      descDeva: 'विश्वाच्या उत्पत्तीचे मूळ सांगणारे उपनिषद. यात शुद्ध चेतना म्हणजेच अंतिम सत्य (ब्रह्म) असल्याचे सांगणारे महावाक्य \'प्रज्ञानं ब्रह्म\' आहे.'
    },
    {
      name: 'Kauṣītaki Upaniṣad',
      deva: 'कौषीतकी उपनिषद्',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Hotṛ (Vedānta Sage)',
      roleDeva: 'होता (वेदांत ऋषी)',
      structure: '4 Chapters',
      structureDeva: '४ अध्याय',
      desc: 'Explores the path of the soul after death, the identity of breath (Prana) with consciousness, and the ultimate realization of unity.',
      descDeva: 'मृत्यूनंतरच्या प्रवासाचे गूढ, प्राण आणि चेतना यांच्यातील एकता आणि आत्मसाक्षात्काराचे सविस्तर विवेचन.'
    }
  ],
  yajur: [
    {
      name: 'Bṛhadāraṇyaka Upaniṣad',
      deva: 'बृहदारण्यक उपनिषद्',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Adhvaryu (Vedānta Sage)',
      roleDeva: 'अध्वर्यू (वेदांत ऋषी)',
      structure: '6 Chapters',
      structureDeva: '६ अध्याय',
      desc: 'The largest and oldest Upanishad, famous for dialogues of Sage Yajnavalkya with Maitreyi and Gargi on the nature of the self. Contains the Mahāvākya "Ahaṃ Brahmāsmi" (I am Brahman).',
      descDeva: 'सर्वात मोठे व प्राचीन उपनिषद. यात याज्ञवल्क्य ऋषींचे गार्गी आणि मैत्रेयी यांच्यासोबतचे संवाद आहेत. यात \'अहं ब्रह्मास्मि\' (मी परब्रह्म आहे) हे महावाक्य आहे.'
    },
    {
      name: 'Īśa Upaniṣad',
      deva: 'ईश उपनिषद्',
      category: 'Śukla Yajurveda',
      categoryDeva: 'शुक्ल यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Adhvaryu (Vedānta Sage)',
      roleDeva: 'अध्वर्यू (वेदांत ऋषी)',
      structure: '18 Verses',
      structureDeva: '१८ श्लोक',
      desc: 'The final chapter of Shukla Yajurveda Samhita. Teaches that the entire universe is pervaded by the Divine, and advocates selfless action.',
      descDeva: 'वाजसनेयी संहितेचा शेवटचा भाग. संपूर्ण जग ईश्वराने व्यापलेले असून, कर्माचा त्याग न करता निष्काम भावनेने जगण्याचा उपदेश यात आहे.'
    },
    {
      name: 'Taittirīya Upaniṣad',
      deva: 'तैत्तिरीय उपनिषद्',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Adhvaryu (Vedānta Sage)',
      roleDeva: 'अध्वर्यू (वेदांत ऋषी)',
      structure: '3 Parts (Śikṣā, Brahmānanda, Bhṛgu Vallī)',
      structureDeva: '३ भाग (शिक्षा, ब्रह्मानंद, भृगुवल्ली)',
      desc: 'Contains instructions on ethics, the famous definition of Brahman as Truth-Knowledge-Infinity, and the theory of five Koshas (sheaths) of human existence.',
      descDeva: 'यात ब्रह्मज्ञानाचा नैतिक पाया, \'सत्यं ज्ञानमनन्तं ब्रह्म\' ही व्याख्या आणि मानवी अस्तित्वाचे ५ कोष (पंचकोष सिद्धांत) मांडले आहेत.'
    },
    {
      name: 'Kaṭha Upaniṣad',
      deva: 'कठ उपनिषद्',
      category: 'Kṛṣṇa Yajurveda',
      categoryDeva: 'कृष्ण यजुर्वेद',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Adhvaryu (Vedānta Sage)',
      roleDeva: 'अध्वर्यू (वेदांत ऋषी)',
      structure: '2 Chapters, 3 Vallis each',
      structureDeva: '२ अध्याय, प्रत्येकात ३ वल्ली',
      desc: 'The famous dialogue between young Naciketas and Yama (Death) on the nature of the soul and what lies beyond death.',
      descDeva: 'नचिकेत आणि यमराज यांच्यातील प्रसिद्ध संवाद, ज्यामध्ये शरीराला रथ आणि आत्म्याला रथी मानून मृत्यूचे गूढ उलगडले आहे.'
    }
  ],
  sama: [
    {
      name: 'Chāndogya Upaniṣad',
      deva: 'छान्दोग्य उपनिषद्',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Vedānta Sage)',
      roleDeva: 'उद्गाता (वेदांत ऋषी)',
      structure: '8 Chapters',
      structureDeva: '८ अध्याय',
      desc: 'One of the most extensive Upanishads, containing the Mahāvākya "Tat Tvam Asi" (That thou art) and teachings on Om and sacrifice.',
      descDeva: 'अतिशय महत्त्वाचे उपनिषद. यात \'तत्त्वमसि\' (ते तूच आहेस) हे महावाक्य आणि ऋषी आरुणींनी आपला मुलगा श्वेतकेतूला दिलेले उपदेश आहेत.'
    },
    {
      name: 'Kena Upaniṣad',
      deva: 'केनोपनिषद्',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Udgātṛ (Vedānta Sage)',
      roleDeva: 'उद्गाता (वेदांत ऋषी)',
      structure: '4 Sections',
      structureDeva: '४ खंड',
      desc: 'Investigates the unseen power behind the mind, senses, and breath. Famous for the parable of gods\' pride broken by a Yaksha.',
      descDeva: 'बुद्धी आणि इंद्रियांच्या मागे असणाऱ्या सुप्त शक्तीचा शोध. यात यक्षाचे रूप घेऊन आलेल्या ब्रह्माने देवांचा अहंकार नष्ट केल्याची कथा आहे.'
    }
  ],
  atharva: [
    {
      name: 'Muṇḍaka Upaniṣad',
      deva: 'मुण्डक उपनिषद्',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Brahman (Vedānta Sage)',
      roleDeva: 'ब्रह्मा (वेदांत ऋषी)',
      structure: '3 Mundakas, 2 Khandas each',
      structureDeva: '३ मुंडक, प्रत्येकात २ खंड',
      desc: 'Distinguishes lower from higher knowledge. Contains the national motto "Satyameva Jayate" (Truth alone triumphs) and the metaphor of two birds.',
      descDeva: 'परा आणि अपरा विद्येतील फरक. यात भारताचे ब्रीदवाक्य \'सत्यमेव जयते\' (सत्याचाच विजय होतो) आणि एकाच वृक्षावरील दोन पक्ष्यांचे (जीव आणि शिव) सुंदर रूपक आहे.'
    },
    {
      name: 'Māṇḍūkya Upaniṣad',
      deva: 'माण्डूक्य उपनिषद्',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Brahman (Vedānta Sage)',
      roleDeva: 'ब्रह्मा (वेदांत ऋषी)',
      structure: '12 Verses',
      structureDeva: '१२ श्लोक',
      desc: 'Shortest major Upanishad; maps out the four states of consciousness (waking, dreaming, sleeping, Turīya) to A-U-M. Contains "Ayam Ātmā Brahma".',
      descDeva: 'अवघ्या १२ श्लोकांचे सर्वात लहान उपनिषद. यात चेतनेच्या ४ अवस्था (जागृती, स्वप्न, सुषुप्ती, तुरीय) आणि \'अयमात्मा ब्रह्म\' (हा आत्माच ब्रह्म आहे) हे महावाक्य आहे.'
    },
    {
      name: 'Praśna Upaniṣad',
      deva: 'प्रश्न उपनिषद्',
      status: 'Fully Extant',
      statusDeva: 'पूर्णपणे उपलब्ध',
      role: 'Brahman (Vedānta Sage)',
      roleDeva: 'ब्रह्मा (वेदांत ऋषी)',
      structure: '6 Questions',
      structureDeva: '६ प्रश्न',
      desc: 'Six seekers ask Sage Pippalāda six fundamental questions about the source of creation, life-force (Prana), waking, dreaming, and the nature of consciousness.',
      descDeva: 'सहा जिज्ञासूंनी पिप्पलाद ऋषींना सृष्टी, प्राण आणि मानवी चेतनेबद्दल विचारलेले सहा मूलभूत प्रश्न आणि त्यांचे निरसन.'
    }
  ]
};

export const UPANISHADS_TEACHINGS_DATA: Record<string, VedicTeaching[]> = {
  rig: [
    {
      name: 'Prajñānaṃ Brahma',
      nameDeva: 'प्रज्ञानं ब्रह्म',
      citation: 'Aitareya Upaniṣad 3.1.3',
      citationDeva: 'ऐतरेय उपनिषद् ३.१.३',
      summary: 'Consciousness is Brahman. Declares that the supreme intelligence animating the universe is the ultimate reality.',
      summaryDeva: 'ज्ञान किंवा चेतना हेच परब्रह्म आहे. विश्वातील सर्व जड-चेतन सृष्टीला चालवणारी जी शुद्ध जाणीव आहे, तीच अंतिम सत्य आहे.',
      verse: {
        deva: 'एष ब्रह्मा एष इन्द्र एष प्रजापतिरेते सर्वे देवाः ।\nप्रज्ञाननेत्रो लोकः प्रज्ञा प्रतिष्ठा प्रज्ञानं ब्रह्म ॥',
        trans: 'eṣa brahmā eṣa indra eṣa prajāpatirete sarve devāḥ |\nprajñānetro lokaḥ prajñā pratiṣṭhā prañjānaṃ brahma ||',
        cite: 'AU 3.1.3'
      }
    }
  ],
  yajur: [
    {
      name: 'Ahaṃ Brahmāsmi',
      nameDeva: 'अहं ब्रह्मास्मि',
      citation: 'Bṛhadāraṇyaka Upaniṣad 1.4.10',
      citationDeva: 'बृहदारण्यक उपनिषद् १.४.१०',
      summary: 'I am Brahman. Realization of the absolute unity between the individual self (Atman) and the universal self.',
      summaryDeva: 'मी ब्रह्म आहे. माणसाचा अंतर्गत आत्मा आणि विश्वाचे परमतत्त्व हे वेगळे नसून एकच आहेत, या अंतिम सत्याचा साक्षात्कार.',
      verse: {
        deva: 'ब्रह्म वा इदमग्र आसीत् तदात्मानमेवावेत् ।\nअहं ब्रह्मास्मीति तस्मात्सर्वमभवत् ॥',
        trans: 'brahma vā idamagra āsīt tadātmānamevāvet |\nahaṃ brahmāsmīti tasmātsarvamabhavat ||',
        cite: 'BU 1.4.10'
      }
    }
  ],
  sama: [
    {
      name: 'Tat Tvam Asi',
      nameDeva: 'तत्त्वमसि',
      citation: 'Chāndogya Upaniṣad 6.8.7',
      citationDeva: 'छान्दोग्य उपनिषद् ६.८.७',
      summary: 'That thou art. Sage Uddālaka teaches Śvetaketu that he is identical to the subtle reality that pervades the cosmos.',
      summaryDeva: 'ते तूच आहेस. ऋषी आरुणी आपल्या मुलाला सांगतात की या सृष्टीचे जे अदृश्य, सूक्ष्म मूळ तत्त्व आहे, ते म्हणजेच तू स्वतः आहेस.',
      verse: {
        deva: 'स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा ।\nतत्त्वमसि श्वेतकेतो इति ॥',
        trans: 'sa ya eṣo\'ṇimaitadātmyamidaṃ sarvaṃ tatsatyaṃ sa ātmā |\ntat tvam asi śvetaketo iti ||',
        cite: 'CU 6.8.7'
      }
    }
  ],
  atharva: [
    {
      name: 'Ayam Ātmā Brahma',
      nameDeva: 'अयमात्मा ब्रह्म',
      citation: 'Māṇḍūkya Upaniṣad 1.2',
      citationDeva: 'माण्डूक्य उपनिषद् १.२',
      summary: 'This Self is Brahman. Declares that the individual soul residing in all beings is identical to the infinite Brahman.',
      summaryDeva: 'हा आत्मा ब्रह्म आहे. आपल्या प्रत्येकाच्या शरीरात निवास करणारा आत्मा हा विश्वाच्या अनंत चैतन्याचाच अंश आहे.',
      verse: {
        deva: 'सर्वं ह्येतद् ब्रह्म अयमात्मा ब्रह्म ।\nसोऽयमात्मा चतुष्पात् ॥',
        trans: 'sarvaṃ hyetad brahma ayamātmā brahma |\nso\'yamātmā catuṣpāt ||',
        cite: 'MU 1.2'
      }
    }
  ]
};
