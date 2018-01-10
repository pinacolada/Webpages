//============================================================================================================================================================
//      C O L O R (r, g, b, rgb, rgba)
//============================================================================================================================================================
class Color {
    constructor(value, alpha = 1.0) {
        this.value = value;
        this.alpha = alpha;
    }
    /**
     * Composante rouge de la couleur
     */
    get r() {
        return this.value >> 16 & 0xFF;
    }
    /**
     * Composante verte de la couleur
     */
    get g() {
        return this.value >> 8 & 0xFF;
    }
    /**
     * Composante bleue de la couleur
     */
    get b() {
        return this.value & 0xFF;
    }
    /**
     * Valeur css sans alpha
     */
    get rgb() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
    /**
     * Valeur css avec alpha
     */
    get rgba() {
        return `rgba(${this.r},${this.g},${this.b},${this.alpha.toFixed(1)})`;
    }
}
//============================================================================================================================================================
//      C U R S O R (enum des différents types de curseurs)
//============================================================================================================================================================
var Cursor;
(function (Cursor) {
    Cursor["alias"] = "alias";
    Cursor["all_scroll"] = "all-scroll";
    Cursor["auto"] = "auto";
    Cursor["cell"] = "cell";
    Cursor["context_menu"] = "context-menu";
    Cursor["col_resize"] = "col-resize";
    Cursor["copy"] = "copy";
    Cursor["crosshair"] = "crosshair";
    Cursor["default"] = "default";
    Cursor["e_resize"] = "e-resize";
    Cursor["ew_resize"] = "ew-resize";
    Cursor["grab"] = "grab";
    Cursor["grabbing"] = "grabbing";
    Cursor["help"] = "help";
    Cursor["move"] = "move";
    Cursor["n_resize"] = "n-resize";
    Cursor["ne_resize"] = "ne-resize";
    Cursor["nesw_resize"] = "nesw-resize";
    Cursor["ns_resize"] = "ns-resize";
    Cursor["nw_resize"] = "nw-resize";
    Cursor["nwse_resize"] = "nwse-resize";
    Cursor["no_drop"] = "no-drop";
    Cursor["none"] = "none";
    Cursor["not_allowed"] = "not-allowed";
    Cursor["pointer"] = "pointer";
    Cursor["progress"] = "progress";
    Cursor["row_resize"] = "row-resize";
    Cursor["s_resize"] = "s-resize";
    Cursor["se_resize"] = "se-resize";
    Cursor["sw_resize"] = "sw-resize";
    Cursor["text"] = "text";
    Cursor["url"] = "url()";
    Cursor["w_resize"] = "w-resize";
    Cursor["wait"] = "wait";
    Cursor["zoom_in"] = "zoom-in";
    Cursor["zoom_out"] = "zoom-out";
})(Cursor || (Cursor = {}));
//============================================================================================================================================================
//      L I N E  S T Y L E (enum) none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit
//============================================================================================================================================================
var LineStyle;
(function (LineStyle) {
    /** Pas de  bordure */
    LineStyle["NONE"] = "none";
    /** bordure masquée */
    LineStyle["HIDDEN"] = "hidden";
    /** Avec des pointillés */
    LineStyle["DOTTED"] = "dotted";
    /** Avec des tirets */
    LineStyle["DASHED"] = "dashed";
    /** Pleine */
    LineStyle["SOLID"] = "solid";
    LineStyle["DOUBLE"] = "double";
    /** en creux */
    LineStyle["GROOVE"] = "groove";
    /** 3D enfoncé */
    LineStyle["INSET"] = "inset";
    /** 3D relâché */
    LineStyle["OUTSET"] = "outset";
    /** en relief */
    LineStyle["RIDGE"] = "ridge";
    /** Valeur de base */
    LineStyle["INITIAL"] = "initial";
    /** Valeur du parent */
    LineStyle["INHERIT"] = "inherit";
})(LineStyle || (LineStyle = {}));
//============================================================================================================================================================
//      R E C T
//============================================================================================================================================================
class Rect {
    /**
     * Rectangle de délimitation de zone
     * @param css feuille de style associée
     * @param px position horizontale
     * @param py position verticale
     * @param w largeur
     * @param h hauteur
     */
    constructor(css, px, py, w = 0, h = 0) {
        this.css = css;
        this.values = [0, 0, 0, 0];
        this.setPos(px, py);
        this.setSize(w, h);
    }
    /**
     * Définition de la position
     * @param px position horizontale
     * @param py position verticale
     */
    setPos(px, py) {
        this.x = px;
        this.y = py;
    }
    /**
     * Définition de la taille
     * @param w largeur
     * @param h hauteur
     */
    setSize(w, h) {
        this.width = w;
        this.height = h;
    }
    /**
     * Position horizontale
     */
    get x() {
        return this.values[0];
    }
    set x(value) {
        this.values[0] = value;
        this.css.left = `${value}px`;
    }
    /**
     * Position verticale
     */
    get y() {
        return this.values[1];
    }
    set y(value) {
        this.values[1] = value;
        this.css.top = `${value}px`;
    }
    /**
     * Largeur
     */
    get width() {
        return this.values[2];
    }
    set width(value) {
        this.values[2] = value;
        this.css.width = `${value}px`;
    }
    /**
     * Hauteur
     */
    get height() {
        return this.values[3];
    }
    set height(value) {
        this.values[3] = value;
        this.css.height = `${value}px`;
    }
    /**
     * Affichage des valeurs du rectangle
     */
    toString() {
        return `(x=${this.x}, y=${this.y})-(w=${this.width}, h=${this.height})`;
    }
}
//============================================================================================================================================================
//      T E X T  A L I G N (enum) left|right|center|justify|initial|inherit
//============================================================================================================================================================
var TextAlign;
(function (TextAlign) {
    /** aligner à gauche */
    TextAlign["LEFT"] = "left";
    /** aligner au centre */
    TextAlign["CENTER"] = "center";
    /** Aligner à droite */
    TextAlign["RIGHT"] = "right";
    /** Répartir le texte sur la largeur */
    TextAlign["JUSTIFY"] = "justify";
    /** Alignement de base */
    TextAlign["INITIAL"] = "initial";
    /** Alignement du parent */
    TextAlign["INHERIT"] = "inherit";
})(TextAlign || (TextAlign = {}));
//============================================================================================================================================================
//      B A C K G R O U N D (color, alpha)
//============================================================================================================================================================
class Background {
    /**
     * Arrière-plan uni (couleur, transparence, dégradé) de zone
     * @param css feuille de style associée
     * @param colorVal couleur entre 0x000000 et 0xFFFFFF
     * @param alphaVal transparence entre 0 (transparent) et 1 (opaque)
     */
    constructor(css, colorVal, alphaVal = 1) {
        this.css = css;
        this.col = new Color(colorVal, alphaVal);
        this.setValues(colorVal, alphaVal);
    }
    /**
     * Définit un arrière-plan en dégradé
     * @param colors liste des couleurs du dégradé (valeurs entre 0x000000 et 0xFFFFFF)
     * @param alphas liste des transparences dans l'ordre des couleurs (valeurs entre 0.0 et 1.0)
     * @param ratios liste des positions dans l'ordre des couleurs (début = 0, milieu = 50, fin = 100)
     * @param degres angle du dégradé en degrés (0:monter, 90:vers la droite, 180:descendre, 270:vers la gauche)
     */
    setGradient(colors, alphas, ratios, degres) {
        let rgbas = colors.map((n, i) => new Color(n, alphas[i]).rgba + ratios[i] + "%").join(",");
        this.css.background = `linear-gradient(${degres}deg,${rgbas})`;
    }
    /**
     * Définition des valeurs en une passe
     * @param colorVal couleur d'arrière-plan entre 0x000000 et 0xFFFFFF
     * @param alphaVal transparence d'arrière-plan entre 0 (transparent) et 1 (opaque)
     */
    setValues(colorVal, alphaVal = 1) {
        this.color = colorVal;
        this.alpha = alphaVal;
    }
    /**
     * Transparence d'arrière-plan entre 0 (transparent) et 1 (opaque)
     */
    get alpha() {
        return this.col.alpha;
    }
    set alpha(value) {
        this.col.alpha = value < 0 ? 0 : value > 1 ? 1 : value;
        this.css.backgroundColor = this.col.rgba;
    }
    /**
     * Couleur d'arrière-plan entre 0x000000 et 0xFFFFFF
     */
    get color() {
        return this.col.value;
    }
    set color(value) {
        this.col.value = value < 0 ? 0 : value > 0xFFFFFF ? 0xFFFFFF : value;
        this.css.backgroundColor = this.col.rgba;
    }
}
//============================================================================================================================================================
//      B O R D E R (color, alpha, radius, lineStyle, thickness)
//============================================================================================================================================================
class Border {
    /**
     * Bordure (épaisseur, couleur, transparence, style, rayon) de zone
     * @param css  feuille de style associée
     * @param thickness épaisseur de la bordure en pixels
     * @param style type de ligne (énumération)
     * @param colorVal couleur de bordure entre 0x000000 et 0xFFFFFF
     * @param alphaVal transparence de bordure entre 0 (transparent) et 1 (opaque)
     * @param radiusVal arrondi des coins en pixels
     */
    constructor(css, thickness, style, colorVal, alphaVal = 1.0, radiusVal = 0) {
        this.css = css;
        this.col = new Color(colorVal, alphaVal);
        this.setValues(thickness, style, colorVal, alphaVal, radiusVal);
    }
    /**
     * Définition des paramètres de bordure en une passe
     * @param thickness Épaisseur de la bordure en pixels
     * @param style Type de ligne (énumération LineStyle)
     * @param colorVal Couleur de bordure entre 0x000000 et 0xFFFFFF
     * @param alphaVal Transparence de bordure entre 0 (transparent) et 1 (opaque)
     * @param radiusVal Arrondi des coins en pixels
     */
    setValues(thickness, style, colorVal, alphaVal = 1.0, radiusVal = 0) {
        this.thickness = thickness;
        this.line = style;
        this.color = colorVal;
        this.alpha = alphaVal;
        this.radius = radiusVal;
    }
    /**
     * Transparence de bordure entre 0 (transparent) et 1 (opaque)
     */
    get alpha() {
        return this.col.alpha;
    }
    set alpha(value) {
        let v = value < 0 ? 0 : value > 1 ? 1 : value;
        this.col.alpha = value;
        this.css.borderColor = this.col.rgba;
    }
    /**
     * Couleur de bordure entre 0x000000 et 0xFFFFFF
     */
    get color() {
        return this.col.value;
    }
    set color(value) {
        this.col.value = value < 0 ? 0 : value > 0xFFFFFF ? 0xFFFFFF : value;
        this.css.borderColor = this.col.rgba;
    }
    /**
     * Arrondi des coins en pixels
     */
    get radius() {
        return parseInt(this.css.borderRadius);
    }
    set radius(value) {
        this.css.borderRadius = value + "px";
    }
    /**
     * Type de ligne (énumération LineStyle)
     */
    get line() {
        return LineStyle[this.css.borderStyle];
    }
    set line(value) {
        this.css.borderStyle = value;
    }
    /**
     * Épaisseur de la bordure en pixels
     */
    get thickness() {
        return parseFloat(this.css.borderWidth);
    }
    set thickness(value) {
        this.css.borderWidth = value + "px";
    }
}
//============================================================================================================================================================
//      T E X T F O R M A T
//============================================================================================================================================================
class TextFormat {
    /**
     * Format du texte
     * @param frame Zone à formater
     * @param fontName Nom de la police
     * @param fontSize Taille des caractères en points
     * @param textColor Couleur du texte entre 0x000000 et 0xFFFFFF
     * @param textAlign Alignement du texte (énumération TextAlign)
     */
    constructor(frame, fontName, fontSize, textColor, textAlign) {
        this.css = frame.div.style;
        this.spanCss = frame.span.style;
        this.col = new Color(textColor, 1.0);
        this.setBaseValues(fontName, fontSize, textColor, textAlign);
    }
    /**
     * Format général du texte
     * @param fontName Nom de la police
     * @param fontSize Taille des caractères en points
     * @param textColor Couleur du texte entre 0x000000 et 0xFFFFFF
     * @param textAlign Alignement du texte (énumération TextAlign)
     */
    setBaseValues(fontName, fontSize, textColor, textAlign) {
        this.font = fontName;
        this.size = fontSize;
        this.color = textColor;
        this.align = textAlign;
        return this;
    }
    /**
     * Formatage spécifique de présentation
     * @param b bold (texte en gras)
     * @param i italic (texte en italiques)
     * @param u underline (texte souligné)
     * @param s strike-through (texte barré)
     * @param sc small caps (petites majuscules)
     */
    setStyleValues(b = false, i = false, u = false, s = false, sc = false) {
        this.bold = b;
        this.italic = i;
        this.underline = u;
        this.strikeThrough = s;
        this.smallCaps = sc;
        return this;
    }
    /**
     * Nom de la police
     */
    get font() {
        return this.css.fontFamily;
    }
    set font(value) {
        this.css.fontFamily = value;
    }
    /**
     * Taille des caractères en points
     */
    get size() {
        return parseInt(this.spanCss.fontSize);
    }
    set size(value) {
        this.spanCss.fontSize = `${value}pt`;
    }
    /**
     * Transparence de la police de caractère
     */
    get alpha() {
        return this.col.alpha;
    }
    set alpha(value) {
        this.col.alpha = value;
        this.css.color = this.col.rgba;
    }
    /**
     * Couleur du texte entre 0x000000 et 0xFFFFFF
     */
    get color() {
        return this.col.value;
    }
    set color(value) {
        this.col.value = value;
        this.css.color = this.col.rgba;
    }
    /**
     * Mettre le texte en gras ?
     */
    get bold() {
        return this.css.fontWeight == "bold";
    }
    set bold(value) {
        this.css.fontWeight = value ? "bold" : "";
    }
    /**
     * Mettre le texte en italiques ?
     */
    get italic() {
        return this.css.fontStyle == "italic";
    }
    set italic(value) {
        this.css.fontSize = value ? "italic" : "";
    }
    /**
     * Souligner le texte ?
     */
    get underline() {
        return this.css.textDecoration == "underline";
    }
    set underline(value) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "underline" : prev;
    }
    /**
     * Barrer le texte ?
     */
    get strikeThrough() {
        return this.css.textDecoration == "line-through";
    }
    set strikeThrough(value) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "line-through" : prev;
    }
    /**
     * Mettre en petites majuscules ?
     */
    get smallCaps() {
        return this.css.fontVariant == "small-caps";
    }
    set smallCaps(value) {
        this.css.fontVariant = value ? "small-caps" : "";
    }
    /**
     * Alignement du texte (énumération TextAlign)
     */
    get align() {
        return TextAlign[this.css.textAlign];
    }
    set align(value) {
        this.css.textAlign = value;
    }
    /**
     * Espace entre le cadre et le texte à gauche
     */
    get marginLeft() {
        return parseInt(this.css.paddingLeft);
    }
    set marginLeft(value) {
        this.css.paddingLeft = `${value}px`;
    }
    /**
     * Espace entre le cadre et le texte à droite
     */
    get marginRight() {
        return parseInt(this.css.paddingRight);
    }
    set marginRight(value) {
        this.css.paddingRight = `${value}px`;
    }
    /**
     * Espacement (vertical) entre les lignes
     * Définit la position du texte en hauteur
     */
    get leading() {
        return parseInt(this.css.lineHeight);
    }
    set leading(value) {
        this.css.lineHeight = `${value}`;
    }
    /**
     * Espacement (horizontal) entre les lettres
     */
    get letterSpacing() {
        return parseInt(this.css.letterSpacing);
    }
    set letterSpacing(value) {
        this.css.letterSpacing = `${value}px`;
    }
}
//============================================================================================================================================================
//      L I S T E N E R 
//============================================================================================================================================================
class Listener {
    /**
     * Ecouteur d'événement
     * @param f Zone qui écoute l'événement
     * @param type type de l'événement à écouter
     * @param callback fonction(frame, event) en réaction à l'événement
     */
    constructor(f, type, callback) {
        this.f = f;
        this.type = type;
        this.callback = callback;
        this.listen();
    }
    /**
     * Teste la correspondance avec l'écouteur
     * @param type type à tester
     * @param callback réaction à l'événement
     */
    isListening(type, callback) {
        return this.type === type && this.callback === callback;
    }
    /**
     * Commence à écouter
     */
    listen() {
        let fx = e => this.callback(this.f, e);
        this.f.div.addEventListener(this.type, fx);
    }
    /**
     * Cesse d'écouter et détruit l'écouteur
     */
    dispose() {
        let fx = e => this.callback(this.f, e);
        this.f.div.removeEventListener(this.type, fx);
        this.f = null;
        this.type = undefined;
        this.callback = null;
    }
}
//============================================================================================================================================================
//      F R A M E
//============================================================================================================================================================
class Frame {
    /**
     * Zone d'affichage rectangulaire
     * @param idFrame Crée une zone visuelle
     * @param target Elément HTML parent ou Frame parente
     * @param x gauche
     * @param y haut
     * @param w largeur
     * @param h hauteur
     * @param colorVal couleur de fond
     * @param alphaVal transparence du fond
     */
    constructor(idFrame, target, x, y, w, h, colorVal, alphaVal = 1.0) {
        /** Liste des enfants de la zone */
        this.children = [];
        /** Liste des écouteurs de la zone */
        this.listeners = [];
        this.div = document.createElement("div");
        this.span = document.createElement("span");
        if (target instanceof Frame) {
            target.addChild(this);
        }
        else {
            this.parent = target;
        }
        this.div.appendChild(this.span);
        this.css = this.div.style;
        this.rect = new Rect(this.css, x, y, w, h);
        this.fmt = new TextFormat(this, "verdana", 12, 0x000000, TextAlign.LEFT);
        this.background = new Background(this.css, colorVal, alphaVal);
        this.border = new Border(this.css, 1, LineStyle.SOLID, colorVal, alphaVal);
        this.id = idFrame;
        this.setCss("position", "absolute", "box-sizing", "border-box", "overflow", "hidden");
        this.selectable = false;
    }
    /**
     * Ajoute une zone visuelle enfant de cette zone
     * @param f zone à ajouter
     */
    addChild(f) {
        if (f.parentFrame != null) {
            f = f.parentFrame.removeChild(f);
        }
        this.div.appendChild(f.div);
        this.children.push(f);
        f.parentFrame = this;
        return f;
    }
    /**
     * Insère une zone avant une autre zone enfant
     * @param index index de la zone à insérer
     * @param f zone à insérer entre deux zones de la liste
     */
    addChildAt(index, f) {
        f = this.addChild(f);
        index = Math.min(index, this.children.length - 1);
        if (index < 0 || index == this.childIndex(f)) {
            return f;
        }
        let prev = this.children[index];
        if (prev instanceof Frame) {
            this.div.insertBefore(f.div, prev.div);
            this.children[index] = f;
            this.children[index + 1] = prev;
        }
    }
    /**
     * Définit la réaction à un événement
     * @param type type de l'événement à écouter (click, mousemove, mouseleave...)
     * @param callback réaction(frame, event) à cet événement
     */
    addEventListener(type, callback) {
        for (let l of this.listeners) {
            if (l.isListening(type, callback)) {
                return;
            }
        }
        this.listeners.push(new Listener(this, type, callback));
    }
    /**
     * Renvoie l'index d'une zone enfant
     * @param f Enfant dont on veut l'index
     */
    childIndex(f) {
        return this.children.indexOf(f);
    }
    /**
     * Rend fermable la zone (affiche et active une croix de fermeture)
     * @param ok rendre fermable ?
     */
    closable(ok) {
        let dh = this.getChildByName("d_h"); // droite haut = bouton de fermeture
        if (ok) {
            if (dh != null)
                return; // déjà fermable
            dh = new Frame("d_h", this, 0, 0, 15, 15, 0xFFFFFF, 0.2);
            dh.setTextFormat("calibri", 13, 0x000000, TextAlign.CENTER, true);
            dh.fmt.leading = 0.6; // remonte la croix
            dh.right = 0;
            dh.text = "x"; // ✖ = croix de fermeture &#10006
            dh.addEventListener("mouseover", () => { dh.background.alpha = 1.0; });
            dh.addEventListener("mouseout", () => { dh.background.alpha = 0.2; });
            dh.addEventListener("click", (f, e) => f.parentFrame.dispose());
            dh.cursor = Cursor.pointer;
            dh.setAttrs("title", "Fermer");
        }
        else {
            if (dh != null)
                dh.dispose();
        }
        return this;
    }
    /**
     * Détruit la zone (enlève ses enfants, ses écouteurs, son parent)
     */
    dispose() {
        this.removeChildren();
        this.removeListeners();
        this.parent = null;
    }
    /**
     * Renvoie une zone enfant retrouvée par son index
     * @param index index de l'enfant désiré
     */
    getChild(index) {
        if (index < 0 || index > this.children.length - 1) {
            throw new RangeError("Pas d'enfant à l'index " + index);
        }
        return this.children[index];
    }
    /**
     * Renvoie unz zone enfant retrouvée par son nom
     * @param idChild identifiant de l'enfant désiré
     */
    getChildByName(idChild) {
        for (let f of this.children) {
            if (f.id === idChild)
                return f;
        }
        return null;
    }
    /**
     * Zone déplaçable ?
     * @param ok Faut-il rendre la zone déplaçable ?
     */
    movable(ok) {
        let gh = this.getChildByName("g_h");
        ;
        if (ok) {
            if (gh != null)
                return; // dééjà déplaçable
            gh = new Frame("g_h", this, -4, -4, 14, 14, 0x009999, 0.4);
            gh.setBorder(1, LineStyle.SOLID, 0x000000, 0.5, 8);
            gh.addEventListener("mousedown", Frame.FrameMove);
            gh.cursor = Cursor.grab;
            gh.setAttrs("title", "Déplacer le cadre");
        }
        else {
            if (gh != null)
                gh.dispose();
        }
        return this;
    }
    /**
     * Supprime et détruit tous les enfants
     */
    removeChildren() {
        while (this.children.length) {
            this.children.pop().dispose();
        }
        return this;
    }
    /**
     * Supprime et détruit tous les écouteurs
     */
    removeListeners() {
        while (this.listeners.length) {
            this.listeners.pop().dispose();
        }
        return this;
    }
    /**
     * Supprime un écouteur d'événement
     * @param type type de l'événement à ne plus surveiller
     * @param callback fonction à ne plus appeler
     */
    removeEventListener(type, callback) {
        let l;
        for (var i = 0; i < this.listeners.length; i++) {
            l = this.listeners[i];
            if (l.isListening(type, callback)) {
                this.listeners.splice(i, 1)[0].dispose();
                return;
            }
        }
    }
    /**
     * Intégrer ceci à Movable !
     * @param bille
     * @param e
     */
    static FrameMove(bille, e) {
        let f = bille.parentFrame;
        if (f == null)
            return;
        bille.cursor = Cursor.grabbing;
        function moveParent(e) {
            f.rect.x += e.movementX;
            f.rect.y += e.movementY;
        }
        function releaseParent(e) {
            window.removeEventListener("mousemove", moveParent);
            window.removeEventListener("mouseup", releaseParent);
            bille.cursor = Cursor.grab;
        }
        window.addEventListener("mouseup", releaseParent);
        window.addEventListener("mousemove", moveParent);
        return f;
    }
    /**
     * Intégrer ceci à resizable !
     * @param bille
     * @param e
     */
    static FrameResize(bille, e) {
        let f = bille.parentFrame;
        if (f == null)
            return;
        function resizeParent(e) {
            f.width += e.movementX;
            f.height += e.movementY;
        }
        function releaseParent(e) {
            window.removeEventListener("mousemove", resizeParent);
            window.removeEventListener("mouseup", releaseParent);
        }
        window.addEventListener("mouseup", releaseParent);
        window.addEventListener("mousemove", resizeParent);
        return f;
    }
    /**
     * Enlève une zone enfant (sans la détruire)
     * @param f zone enfant à enlever
     */
    removeChild(f) {
        let index = this.children.indexOf(f);
        if (index > -1) {
            this.div.removeChild(f.div);
            this.children.splice(index, 1);
            f.parentFrame = null;
            return f;
        }
        return null;
    }
    /**
     * Rend la zone redimensionnable par une poignée en bas à droite
     * @param ok Faut-il rendre la zone redimensionnable ?
     */
    resizable(ok) {
        let db = this.getChildByName("b_d");
        if (ok) {
            if (db != null)
                return;
            db = new Frame("d_b", this, 0, 0, 14, 14, 0xFF00FF, 0.5);
            db.right = -3;
            db.bottom = -3;
            db.setBorder(1, LineStyle.SOLID, 0x000000, 0.5, 8);
            db.setAttrs("title", "Redimensionner");
            db.cursor = Cursor.nwse_resize;
            db.addEventListener("mousedown", Frame.FrameResize);
        }
        else {
            if (db != null)
                db.dispose();
        }
        return this;
    }
    /**
     * Définit les attributs de la div sous-jascente
     * @param propVals Suite alternant des noms et des valeurs d'attributs
     */
    setAttrs(...propVals) {
        for (let i = 0; i < propVals.length; i += 2) {
            this.div.setAttribute(propVals[i], propVals[i + 1]);
        }
        return this;
    }
    /**
     * Définit le style du fond de la zone
     * @param colorVal couleur du fond
     * @param alphaVal transparence du fond
     */
    setBackground(colorVal, alphaVal) {
        this.background.setValues(colorVal, alphaVal);
        return this;
    }
    /**
     * Définit la bordure de la zone
     * @param thickness Épaisseur de la bordure en pixels
     * @param style Type de ligne (énumération LineStyle)
     * @param colorVal Couleur de bordure entre 0x000000 et 0xFFFFFF
     * @param alphaVal Transparence de bordure entre 0 (transparent) et 1 (opaque)
     * @param radiusVal Arrondi des coins en pixels
     */
    setBorder(thickness, style, colorVal, alphaVal = 1, radiusVal = 0) {
        this.border.setValues(thickness, style, colorVal, alphaVal, radiusVal);
        return this;
    }
    /**
     * Définit les propriétés css de la div
     * @param propVals Alternance des noms et valeurs des propriétés
     */
    setCss(...propVals) {
        if (this.css != null) {
            for (let i = 0; i < propVals.length; i += 2) {
                this.css[propVals[i]] = propVals[i + 1];
            }
        }
        return this;
    }
    /**
     * Format du texte
     * @param fontName Nom de la police
     * @param fontSize Taille des caractères en points
     * @param textColor Couleur du texte entre 0x000000 et 0xFFFFFF
     * @param textAlign Alignement du texte (énumération TextAlign)
     * @param bold texte en gras ?
     * @param italic texte en italiques ?
     * @param under underline : texte souligné ?
     * @param strike strike-through : texte barré ?
     * @param smallCaps texte en petites majuscules ?
     */
    setTextFormat(fontName, fontSize, textColor, textAlign, bold = false, italic = false, under = false, strike = false, smallCaps = false) {
        this.fmt.setBaseValues(fontName, fontSize, textColor, textAlign);
        this.fmt.setStyleValues(bold, italic, under, strike, smallCaps);
        return this;
    }
    /**
     * Style du texte
     * @param bold texte en gras ?
     * @param italic texte en italiques ?
     * @param under underline : texte souligné ?
     * @param strike strike-through : texte barré ?
     * @param smallCaps texte en petites majuscules ?
     */
    setTextStyle(bold = false, italic = false, under = false, strike = false, smallCaps = false) {
        this.fmt.setStyleValues(bold, italic, under, strike, smallCaps);
        return this;
    }
    /**
     * Position de la zone
     * @param px position horizontale gauche
     * @param py position verticale haut
     */
    setPos(px, py) {
        this.rect.setPos(px, py);
        return this;
    }
    /**
     * Taille de la zone
     * @param width largeur
     * @param height hauteur
     */
    setSize(width, height) {
        this.rect.setSize(width, height);
        return this;
    }
    /**
     * Curseur au survol
     */
    get cursor() {
        return this.css.cursor;
    }
    set cursor(value) {
        this.setCss("cursor", value);
    }
    /**
     * Identifiant de la zone
     */
    get id() {
        return this.div.id;
    }
    set id(value) {
        this.div.id = value;
    }
    /**
     * Zone parente (null pour enlever)
     */
    get parent() {
        return this.div.parentElement;
    }
    set parent(value) {
        if (value == null) {
            this.div.remove();
            this.parentFrame = null;
            this.removeListeners();
        }
        else {
            value.appendChild(this.div);
        }
    }
    /**
     * Le texte doit-il est sélectionnable ?
     */
    get selectable() {
        return (this.css.userSelect == "text");
    }
    set selectable(value) {
        let v = value ? "normal" : "none";
        this.setCss("user-select", v, "-moz-user-select", v, "-webkit-user-select", v);
    }
    /**
     * Contenu textuel
     */
    get text() {
        return this.span.innerHTML;
    }
    set text(value) {
        this.span.innerHTML = value;
    }
    /**
     * Position horizontale gauche
     */
    get left() {
        return this.rect.x;
    }
    set left(value) {
        this.rect.x = value;
    }
    /**
     * Position verticale sommet
     */
    get top() {
        return this.rect.y;
    }
    set top(value) {
        this.rect.y = value;
    }
    /**
     * Position horizontale à droite (annule la position à gauche)
     */
    set right(value) {
        this.setCss("left", "", "right", value + "px");
    }
    /**
     * Position verticale du bas (annule la position du sommet)
     */
    set bottom(value) {
        this.setCss("top", "", "bottom", value + "px");
    }
    /**
     * Largeur de la zone en pixels
     */
    get width() {
        return this.rect.width;
    }
    set width(value) {
        this.rect.width = value;
    }
    /**
     * Hauteur de la zone en pixels
     */
    get height() {
        return this.rect.height;
    }
    set height(value) {
        this.rect.height = value;
    }
}
//============================================================================================================================================================
//      S T A G E
//============================================================================================================================================================
class Stage extends Frame {
    constructor(bgColor) {
        super("stage", document.body, 0, 0, 100, 100, bgColor, 1);
        this.setCss("width", "100%", "height", "100%");
    }
}
//============================================================================================================================================================
//      W I N  : fenêtre avec titre, options de fermeture, déplacement, rediensionnement  
//============================================================================================================================================================
class Win extends Frame {
    /**
     * Fenêtre classique avec bouton de fermeture (closer), zone de titre(title) et poignée de redimensionnement(sizer)
     * @param idWin identifiant de la fenêtre
     * @param target support de la fenêtre (HTMLElement ou Frame)
     * @param x position de la gauche de la fenêtre
     * @param y position du sommet de la fenêtre
     * @param w largeur de la fenêtre
     * @param h hauteur de la fenêtre
     * @param bgColor couleur d'arrière-plan
     * @param borderColor couleur de la bordure
     * @param alphaVal transparence de la fenêtre
     */
    constructor(idWin, target, x, y, w, h, bgColor, borderColor, alphaVal = 1.0) {
        super(idWin, target, x, y, w, h, bgColor, alphaVal);
        this.setBorder(1, LineStyle.OUTSET, borderColor, alphaVal);
        let title = new Frame("title", this, 0, 0, 10, 24, 0x0000FF, 1.0);
        title.background.setGradient([0xFFFFFF, 0x0000FF, 0x0000FF], [1, 0.8, 1], [0, 30, 100], 180);
        title.setTextFormat("Calibri", 12, 0xFFFFFF, TextAlign.CENTER);
        title.setBorder(1, LineStyle.SOLID, 0x0000FF, .4);
        title.setCss("width", "100%");
        this.title = title;
    }
    /**
     * Options d'affichage et d'utilisation (plus jolies que closable/resizable)
     * @param mov La fenêtre peut-elle être déplacée ?
     * @param clos la fenêtre peut-elle être fermée ?
     * @param siz la fenêtre peut-elle être redimensionnée ?
     */
    setWindowOptions(mov = true, clos = true, siz = true) {
        let title = this.title;
        if (mov) {
            title.cursor = Cursor.grab;
            title.addEventListener("mousedown", (titl, e) => {
                const previousTitle = titl.text;
                let fen = titl.parentFrame;
                titl.cursor = Cursor.grabbing;
                window.addEventListener("mouseup", endDragWindow);
                window.addEventListener("mousemove", dragWindow);
                function dragWindow(e) {
                    fen.setPos(fen.left + e.movementX, fen.top + e.movementY);
                    titl.text = `x:${fen.left} y:${fen.top}`;
                }
                function endDragWindow(e) {
                    window.removeEventListener("mouseup", endDragWindow);
                    window.removeEventListener("mousemove", dragWindow);
                    title.cursor = Cursor.grab;
                    titl.text = previousTitle;
                }
            });
        }
        if (clos) {
            let closer = new Frame("close", title, 0, 0, 20, 20, 0xFFFFFF, 0.3);
            closer.text = "x";
            closer.setTextFormat("calibri", 13, 0xFFFFFF, TextAlign.CENTER, true);
            closer.fmt.leading = 0.8; // remonte un peu la croix (1 = hauteur normale)
            closer.right = 0;
            closer.cursor = Cursor.pointer;
            closer.addEventListener("mouseover", (c) => { c.fmt.color = 0xFF0000; });
            closer.addEventListener("mouseout", (c) => { c.fmt.color = 0xFFFFFF; });
            closer.addEventListener("click", (c) => { c.parentFrame.parentFrame.dispose(); });
            this.closer = closer;
        }
        if (siz) {
            let sizer = new Frame("sizer", this, 0, 0, 14, 14, 0x000000, 0.2);
            sizer.right = 0; // reste collé à droite... Eh oui :)
            sizer.bottom = 0; // reste collé en bas... Facile non ?
            sizer.cursor = Cursor.nwse_resize;
            sizer.addEventListener("mouseover", (s) => { s.background.alpha = 0.5; });
            sizer.addEventListener("mouseout", (s) => { s.background.alpha = 0.2; });
            this.sizer = sizer;
            sizer.addEventListener("mousedown", (sz, e) => {
                let fen = sz.parentFrame;
                let titl = fen.getChildByName("title");
                const previousTitle = titl.text;
                window.addEventListener("mouseup", onEndResize);
                window.addEventListener("mousemove", onResize);
                function onResize(e) {
                    fen.setSize(fen.width + e.movementX, fen.height + e.movementY);
                    if (fen.width < 100)
                        fen.width = 100;
                    if (fen.height < 50)
                        fen.height = 50;
                    titl.text = `${fen.width} x ${fen.height}`;
                }
                function onEndResize(e) {
                    window.removeEventListener("mouseup", onEndResize);
                    window.removeEventListener("mousemove", onResize);
                    titl.text = previousTitle;
                }
            });
        }
        return this;
    }
}
class Input extends Frame {
    /**
     * Zone de saisie générique dans un formulaire
     * @param idInput identifiant et texte d'invite
     * @param form formulaire support
     * @param px position horizontale
     * @param py position verticale
     * @param labelWidth largeur de la zone d'invite
     */
    constructor(idInput, inputType, form, px, py, labelWidth) {
        super(idInput, form, px, py, labelWidth, 24, 0xFFFFFF, 0);
        this.form = form;
        this.setCss("padding", "0");
        this.setTextFormat("verdana", 10, 0x000000, TextAlign.RIGHT);
        this.setBorder(1, LineStyle.DOTTED, 0x0000FF, 10);
        this.text = idInput + " : ";
        this.input = document.createElement("input");
        this.input.type = inputType;
        this.parent.appendChild(this.input);
        this.setInputCss("position", "absolute", "box-sizing", "border-box");
        this.input.onchange = (e) => this.form.callback(this, e);
        this.input.oninput = (e) => this.form.callback(this, e);
    }
    /**
     * Définit les propriétés css de l'input
     * @param propVals Alternance des noms et valeurs des propriétés à modifier
     */
    setInputCss(...propVals) {
        if (this.css != null) {
            for (let i = 0; i < propVals.length; i += 2) {
                this.input.style[propVals[i]] = propVals[i + 1];
            }
        }
        return this;
    }
    /**
     * Définit les attributs de l'input
     * @param propVals Alternance des noms et valeurs des propriétés à modifier
     */
    setInputAttrs(...propVals) {
        if (this.css != null) {
            for (let i = 0; i < propVals.length; i += 2) {
                this.input.setAttribute(propVals[i], propVals[i + 1]);
            }
        }
        return this;
    }
}
class Form extends Win {
    /**
     * Formulaire avec gadgets de saisie
     * @param idForm identifiant du formulaire
     * @param target support du formulaire (HTMLElement ou Frame)
     * @param x position de la gauche du formulaire
     * @param y position du sommet du formulaire
     * @param w largeur du formulaire
     * @param h hauteur du formulaire
     * @param bgColor couleur d'arrière-plan du formulaire
     * @param borderColor couleur de la bordure du formulaire
     * @param alphaVal transparence du formulaire (entre 0: transparent et 1:opaque)
     */
    constructor(idForm, target, x, y, w, h, bgColor, borderColor, alphaVal = 1.0) {
        super(idForm, target, x, y, w, h, bgColor, borderColor, alphaVal);
    }
    /**
     * Ajoute une zone de saisie numerique au formulaire
     * @param label texte de l'invite et identifiant de la zone de saisie
     * @param px position horizontale
     * @param py position verticale
     * @param labelWidth largeur de la zone d'invite
     * @param textWidth largeur de la zone de texte
     * @param valueText contenu de la zone de texte
     */
    addRange(label, px, py, labelWidth, value, min, max) {
        let range = new Input(label, "range", this, px, py, labelWidth);
        let rangeLabel = document.createTextNode(value.toString());
        range.div.appendChild(rangeLabel);
        range.setTextFormat("Calibri", 12, 0x000000, TextAlign.CENTER);
        range.setInputCss("width", "60px", "height", "24px", "left", (px + labelWidth - 8) + "px", "top", py + "px");
        range.setInputAttrs("min", min, "max", max, "value", value);
        range.input.oninput = (e) => {
            rangeLabel.textContent = range.input.value;
            range.form.callback(range, e);
        };
        return range;
    }
    /**
     * Ajoute une zone de saisie de texte au formulaire
     * @param label texte de l'invite et identifiant de la zone de saisie
     * @param px position horizontale
     * @param py position verticale
     * @param labelWidth largeur de la zone d'invite
     * @param textWidth largeur de la zone de texte
     * @param valueText contenu de la zone de texte
     */
    addText(label, px, py, labelWidth, textWidth, valueText) {
        let txt = new Input(label, "text", this, px, py, labelWidth);
        txt.setInputCss("width", textWidth + "px", "height", "24px", "left", (px + labelWidth) + "px", "top", py + "px");
        txt.input.value = valueText;
        return txt;
    }
    /**
     * Ajoute un bouton de formulaire (largeur automatique)
     * @param idButton identifiant du bouton
     * @param px position horizontale de la case à cocher
     * @param py position verticale de la case à cocher
     */
    addButton(idButton, px, py) {
        let btn = new Input(idButton, "button", this, px, py, 0);
        btn.text = ""; // pas de texte d'invite
        btn.setInputCss("left", px + "px", "top", py + "px");
        btn.input.value = idButton;
        btn.input.onclick = (e) => this.callback(btn, e);
        return btn;
    }
    /**
     * Ajoute une case à cocher au formulaire
     * @param idCheckbox identifiant et texte de la case à cocher
     * @param px position horizontale de la case à cocher
     * @param py position verticale de la case à cocher
     * @param labelWidth largeur de la zone d'invite  de la case à cocher
     * @param checked la case est-elle cochée ?
     */
    addCheck(idCheckbox, px, py, labelWidth, checked) {
        let check = new Input(idCheckbox, "checkbox", this, px, py, labelWidth);
        check.setInputCss("left", (px + labelWidth - 4) + "px", "top", (py + 4) + "px");
        check.input.checked = checked;
        check.input.onclick = (e) => check.input.value = check.input.checked.toString();
        return check;
    }
}
//# sourceMappingURL=ui.js.map