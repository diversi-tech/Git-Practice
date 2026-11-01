import type { SolaProfile } from "./profileTypes";
import efratMadmon from "./efrat-madmon/profile";
import giliLev from "./gili-lev/profile";
import hadasHomri from "./hadas-homri/profile";
import malkiGdelovitz from "./malki-gdelovitz/profile";
import rutiPaniri from "./ruti-paniri/profile";
import saraLevin from "./sara-levin/profile";
import sariYagelnik from "./sari-yagelnik/profile";
import shifraZaafrani from "./shifra-zaafrani/profile";
import shiraCarmi from "./shira-carmi/profile";
import tamarDamti from "./tamar-damti/profile";
import tamarZwiebel from "./tamar-zwiebel/profile";
import yaelHain from "./yael-hain/profile";
import yaeliRosner from "./yaeli-rosner/profile";
import yehuditBirman from "./yehudit-birman/profile";
import yehuditVogshal from "./yehudit-vogshal/profile";

export const solaProfiles: Record<string, SolaProfile> = {
  "yehudit-birman": yehuditBirman,
  "yael-hain": yaelHain,
  "sara-levin": saraLevin,
  "efrat-madmon": efratMadmon,
  "yaeli-rosner": yaeliRosner,
  "tamar-damti": tamarDamti,
  "hadas-homri": hadasHomri,
  "tamar-zwiebel": tamarZwiebel,
  "gili-lev": giliLev,
  "yehudit-vogshal": yehuditVogshal,
  "shifra-zaafrani": shifraZaafrani,
  "ruti-paniri": rutiPaniri,
  "sari-yagelnik": sariYagelnik,
  "malki-gdelovitz": malkiGdelovitz,
  "shira-carmi": shiraCarmi,
};
