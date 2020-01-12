export module Helper {

    /**
     * Function Comment
     */
    export const setBoolean = function(value: any): boolean {
      return value != null && `${value}` !== 'false';
    }


    /**
     * Function Comment
     */
    export const stringMatchesPattern = function(text: string, pattern: string) : boolean {

      if(!text || !pattern) {
        return false;
      }

      const result = text.match(new RegExp(pattern, "g"));

      return result && result.length > 0 && result[0] == text;//[0-9A_Z]+
    }

    /**
     * Function Comment
     */
    export const jumpToAnchor = function(anchor: string) {
      try {
        document.getElementById(anchor).scrollIntoView({ block: 'start',  behavior: 'smooth' });
      } catch (e) {
        console.log(e);
      }
    }
}