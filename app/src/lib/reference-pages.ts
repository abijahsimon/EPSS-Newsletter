import artScience from "../reference-pages/art-and-science.html?raw";
import allenGlazner from "../reference-pages/allen-glazner.html?raw";
import awards from "../reference-pages/awards-2026.html?raw";
import balboa from "../reference-pages/balboa.html?raw";
import commencement from "../reference-pages/commencement-2026.html?raw";
import donors from "../reference-pages/donors-and-endowments.html?raw";
import edwinSchauble from "../reference-pages/edwin-schauble.html?raw";
import deepTime from "../reference-pages/epss-through-deep-time.html?raw";
import geraldSchubert from "../reference-pages/gerald-schubert.html?raw";
import gillesPeltzer from "../reference-pages/gilles-peltzer.html?raw";
import home from "../reference-pages/index.html?raw";
import articleTemplate from "../reference-pages/_article-template.html?raw";
import johnHe from "../reference-pages/john-he.html?raw";
import lizzieSu from "../reference-pages/lizzie-su.html?raw";
import peterChi from "../reference-pages/peter-chi.html?raw";
import pengNi from "../reference-pages/peng-ni.html?raw";
import steveJoy from "../reference-pages/steve-joy.html?raw";

export const homeReferencePage = home;
export const deepTimeReferencePage = deepTime;

export const articleReferencePages: Record<string, string> = {
  "allen-glazner": allenGlazner,
  "art-science": artScience,
  "awards-2026": awards,
  balboa,
  "commencement-2026": commencement,
  "donors-endowments": donors,
  "edwin-schauble": edwinSchauble,
  "field-highlights": johnHe,
  "gerald-schubert": geraldSchubert,
  "gilles-peltzer": gillesPeltzer,
  "lizzie-su": lizzieSu,
  "peter-chi": peterChi,
  "peng-ni": pengNi,
  "steve-joy": steveJoy,
};

export const blankArticleReferencePage = articleTemplate;
