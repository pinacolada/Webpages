//============================================================================================================================================================
//      C O L O R (r, g, b, rgb, rgba)
//============================================================================================================================================================

class Color {
    constructor(public value: number, public alpha: number = 1.0) {
    }
    /**
     * Composante rouge de la couleur
     */
    get r(): number {
        return this.value >> 16 & 0xFF;
    }
    /**
     * Composante verte de la couleur
     */
    get g(): number {
        return this.value >> 8 & 0xFF;
    }
    /**
     * Composante bleue de la couleur
     */
    get b(): number {
        return this.value & 0xFF;
    }
    /**
     * Valeur css sans alpha
     */
    get rgb(): string {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
    /**
     * Valeur css avec alpha
     */
    get rgba(): string {
        return `rgba(${this.r},${this.g},${this.b},${this.alpha.toFixed(1)})`;
    }
}

//============================================================================================================================================================
//      C U R S O R (enum des différents types de curseurs)
//============================================================================================================================================================

enum Cursor {
    alias ="alias",
    all_scroll = "all-scroll",
    auto ="auto",
    cell ="cell",
    context_menu ="context-menu",
    col_resize ="col-resize",
    copy ="copy",
    crosshair ="crosshair",
    default ="default",
    e_resize ="e-resize",
    ew_resize ="ew-resize",
    grab ="grab",
    grabbing ="grabbing",
    help ="help",
    move ="move",
    n_resize ="n-resize",
    ne_resize ="ne-resize",
    nesw_resize ="nesw-resize",
    ns_resize ="ns-resize",
    nw_resize ="nw-resize",
    nwse_resize ="nwse-resize",
    no_drop ="no-drop",
    none ="none",
    not_allowed ="not-allowed",
    pointer ="pointer",
    progress ="progress",
    row_resize ="row-resize",
    s_resize ="s-resize",
    se_resize ="se-resize",
    sw_resize ="sw-resize",
    text ="text",
    url ="url()",
    w_resize ="w-resize",
    wait ="wait",
    zoom_in ="zoom-in",
    zoom_out ="zoom-out"
}

//============================================================================================================================================================
//      L I N E  S T Y L E (enum) none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit
//============================================================================================================================================================

enum LineStyle {
    /** Pas de  bordure */
    NONE = "none",
    /** bordure masquée */
    HIDDEN = "hidden",
    /** Avec des pointillés */
    DOTTED = "dotted",
    /** Avec des tirets */
    DASHED = "dashed",
    /** Pleine */
    SOLID ="solid",
    DOUBLE = "double",
    /** en creux */
    GROOVE = "groove",
    /** 3D enfoncé */    
    INSET = "inset",
    /** 3D relâché */
    OUTSET = "outset",
     /** en relief */
    RIDGE = "ridge",
    /** Valeur de base */
    INITIAL = "initial",
    /** Valeur du parent */
    INHERIT = "inherit"    
}

//============================================================================================================================================================
//      R E C T
//============================================================================================================================================================

class Rect {
    values: number[] = [0, 0, 0, 0];
    /**
     * Rectangle de délimitation de zone 
     * @param css feuille de style associée
     * @param px position horizontale
     * @param py position verticale
     * @param w largeur
     * @param h hauteur
     */
    constructor(public css: CSSStyleDeclaration, px: number, py: number, w: number = 0, h: number = 0) {
        this.setPos(px, py);
        this.setSize(w, h);
    }
    /**
     * Définition de la position
     * @param px position horizontale
     * @param py position verticale
     */
    setPos(px: number, py: number) {
        this.x = px;
        this.y = py;
    }
    /**
     * Définition de la taille
     * @param w largeur
     * @param h hauteur
     */
    setSize(w: number, h: number) {
        this.width = w;
        this.height = h;
    }
    /**
     * Position horizontale
     */
    get x(): number {
        return this.values[0];
    }
    set x(value: number) {
        this.values[0] = value;
        this.css.left = `${value}px`;
    }
    /**
     * Position verticale
     */
    get y(): number {
        return this.values[1];
    }
    set y(value: number) {
        this.values[1] = value;
        this.css.top = `${value}px`;
    }
    /**
     * Largeur
     */
    get width(): number {
        return this.values[2];
    }
    set width(value: number) {
        this.values[2] = value;
        this.css.width = `${value}px`;
    }
    /**
     * Hauteur
     */
    get height(): number {
        return this.values[3];
    }
    set height(value: number) {
        this.values[3] = value;
        this.css.height = `${value}px`;
    }
    /**
     * Affichage des valeurs du rectangle
     */
    toString(): string {
        return `(x=${this.x}, y=${this.y})-(w=${this.width}, h=${this.height})`;
    }
}

//============================================================================================================================================================
//      T E X T  A L I G N (enum) left|right|center|justify|initial|inherit
//============================================================================================================================================================

enum TextAlign {
    /** aligner à gauche */
    LEFT = "left",
    /** aligner au centre */
    CENTER = "center",
    /** Aligner à droite */
    RIGHT = "right",
    /** Répartir le texte sur la largeur */
    JUSTIFY = "justify",
    /** Alignement de base */
    INITIAL = "initial",
    /** Alignement du parent */
    INHERIT = "inherit"  
}

//============================================================================================================================================================
//      B A C K G R O U N D (color, alpha)
//============================================================================================================================================================

class Background {
    col: Color;
    /**
     * Arrière-plan uni (couleur, transparence, dégradé) de zone
     * @param css feuille de style associée
     * @param colorVal couleur entre 0x000000 et 0xFFFFFF
     * @param alphaVal transparence entre 0 (transparent) et 1 (opaque)
     */
    constructor(public css: CSSStyleDeclaration, colorVal: number, alphaVal: number = 1) {
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
    setGradient(colors:number[], alphas:number[], ratios:number[], degres:number):void {
        let rgbas:string = colors.map((n, i)=> new Color(n, alphas[i]).rgba + ratios[i]+"%").join(",");
        this.css.background = `linear-gradient(${degres}deg,${rgbas})`;
    }
    /**
     * Définition des valeurs en une passe
     * @param colorVal couleur d'arrière-plan entre 0x000000 et 0xFFFFFF
     * @param alphaVal transparence d'arrière-plan entre 0 (transparent) et 1 (opaque)
     */
    setValues(colorVal: number, alphaVal: number = 1):void {
        this.color = colorVal;
        this.alpha = alphaVal;
    }
    /**
     * Transparence d'arrière-plan entre 0 (transparent) et 1 (opaque)
     */
    get alpha(): number {
        return this.col.alpha;
    }
    set alpha(value: number) {
        this.col.alpha = value < 0 ? 0 : value > 1 ? 1 : value;
        this.css.backgroundColor = this.col.rgba;
    }
    /**
     * Couleur d'arrière-plan entre 0x000000 et 0xFFFFFF
     */
    get color(): number {
        return this.col.value;
    }
    set color(value: number) {
        this.col.value = value < 0 ? 0 : value > 0xFFFFFF ? 0xFFFFFF : value;
        this.css.backgroundColor = this.col.rgba;
    }
}

//============================================================================================================================================================
//      B O R D E R (color, alpha, radius, lineStyle, thickness)
//============================================================================================================================================================

class Border {
    col: Color;
    /**
     * Bordure (épaisseur, couleur, transparence, style, rayon) de zone 
     * @param css  feuille de style associée
     * @param thickness épaisseur de la bordure en pixels
     * @param style type de ligne (énumération)
     * @param colorVal couleur de bordure entre 0x000000 et 0xFFFFFF
     * @param alphaVal transparence de bordure entre 0 (transparent) et 1 (opaque) 
     * @param radiusVal arrondi des coins en pixels
     */
    constructor(public css: CSSStyleDeclaration, thickness: number, style: LineStyle, colorVal: number, alphaVal: number = 1.0, radiusVal: number = 0) {
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
    setValues(thickness: number, style: LineStyle, colorVal: number, alphaVal: number = 1.0, radiusVal: number = 0) {
        this.thickness = thickness;
        this.line = style;
        this.color = colorVal;
        this.alpha = alphaVal;
        this.radius = radiusVal;
    }
    /**
     * Transparence de bordure entre 0 (transparent) et 1 (opaque) 
     */
    get alpha(): number {
        return this.col.alpha;
    }
    set alpha(value: number) {
        let v: number = value < 0 ? 0 : value > 1 ? 1 : value;
        this.col.alpha = value;
        this.css.borderColor = this.col.rgba;
    }
    /**
     * Couleur de bordure entre 0x000000 et 0xFFFFFF
     */
    get color(): number {
        return this.col.value;
    }
    set color(value: number) {
        this.col.value = value < 0 ? 0 : value > 0xFFFFFF ? 0xFFFFFF : value;
        this.css.borderColor = this.col.rgba;
    }
    /**
     * Arrondi des coins en pixels
     */
    get radius(): number {
        return parseInt(this.css.borderRadius);
    }
    set radius(value: number) {
        this.css.borderRadius = value + "px";
    }
    /**
     * Type de ligne (énumération LineStyle)
     */
    get line(): LineStyle {
        return LineStyle[this.css.borderStyle];
    }
    set line(value: LineStyle) {
        this.css.borderStyle = value;
    }
    /**
     * Épaisseur de la bordure en pixels
     */
    get thickness(): number {
        return parseFloat(this.css.borderWidth);
    }
    set thickness(value: number) {
        this.css.borderWidth = value + "px";
    }
}

//============================================================================================================================================================
//      T E X T F O R M A T
//============================================================================================================================================================

class TextFormat {
    col: Color;
    css:CSSStyleDeclaration;
    spanCss:CSSStyleDeclaration;
    /**
     * Format du texte
     * @param frame Zone à formater
     * @param fontName Nom de la police
     * @param fontSize Taille des caractères en points
     * @param textColor Couleur du texte entre 0x000000 et 0xFFFFFF
     * @param textAlign Alignement du texte (énumération TextAlign)
     */
    constructor(frame:Frame, fontName: string, fontSize: number, textColor: number, textAlign: TextAlign) {
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
    setBaseValues(fontName: string, fontSize: number, textColor: number, textAlign: TextAlign):TextFormat {
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
    setStyleValues(b:boolean=false, i:boolean=false, u:boolean=false, s:boolean=false, sc:boolean = false):TextFormat {
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
    get font(): string {
        return this.css.fontFamily;
    }
    set font(value: string) {
        this.css.fontFamily = value;
    }
    /**
     * Taille des caractères en points
     */
    get size(): number {
        return parseInt(this.spanCss.fontSize);
    }
    set size(value: number) {
        this.spanCss.fontSize = `${value}pt`;
    }
    /**
     * Transparence de la police de caractère
     */
    get alpha(): number {
        return this.col.alpha;
    }
    set alpha(value: number) {
        this.col.alpha = value;
        this.css.color = this.col.rgba;
    }
    /**
     * Couleur du texte entre 0x000000 et 0xFFFFFF
     */
    get color(): number {
        return this.col.value;
    }
    set color(value: number) {
        this.col.value = value;
        this.css.color = this.col.rgba;
    }
    /**
     * Mettre le texte en gras ?
     */
    get bold(): boolean {
        return this.css.fontWeight == "bold";
    }
    set bold(value: boolean) {
        this.css.fontWeight = value ? "bold" : "";
    }
    /**
     * Mettre le texte en italiques ?
     */
    get italic(): boolean {
        return this.css.fontStyle == "italic";
    }
    set italic(value: boolean) {
        this.css.fontSize = value ? "italic" : "";
    }
    /**
     * Souligner le texte ?
     */
    get underline(): boolean {
        return this.css.textDecoration == "underline";
    }
    set underline(value: boolean) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "underline" : prev;
    }
    /**
     * Barrer le texte ?
     */
    get strikeThrough(): boolean {
        return this.css.textDecoration == "line-through";
    }
    set strikeThrough(value: boolean) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "line-through" : prev;
    }
    /**
     * Mettre en petites majuscules ?
     */
    get smallCaps(): boolean {
        return this.css.fontVariant == "small-caps";
    }
    set smallCaps(value: boolean) {
        this.css.fontVariant = value ? "small-caps" : "";
    }
    /**
     * Alignement du texte (énumération TextAlign)
     */
    get align(): TextAlign {
        return TextAlign[this.css.textAlign];
    }
    set align(value: TextAlign) {
        this.css.textAlign = value;
    }
    /**
     * Espace entre le cadre et le texte à gauche 
     */
    get marginLeft(): number {
        return parseInt(this.css.paddingLeft);
    }
    set marginLeft(value: number) {
        this.css.paddingLeft = `${value}px`;
    }
    /**
     * Espace entre le cadre et le texte à droite
     */
    get marginRight(): number {
        return parseInt(this.css.paddingRight);
    }
    set marginRight(value: number) {
        this.css.paddingRight = `${value}px`;
    }
    /**
     * Espacement (vertical) entre les lignes
     * Définit la position du texte en hauteur
     */
    get leading(): number {
        return parseInt(this.css.lineHeight);
    }
    set leading(value: number) {
        this.css.lineHeight = `${value}`;
    }
    /**
     * Espacement (horizontal) entre les lettres
     */
    get letterSpacing(): number {
        return parseInt(this.css.letterSpacing);
    }
    set letterSpacing(value: number) {
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
    constructor(public f:Frame, public type:string, public callback:Function) {
        this.listen();
    }
    /**
     * Teste la correspondance avec l'écouteur
     * @param type type à tester
     * @param callback réaction à l'événement 
     */
    isListening(type:string, callback:Function):boolean {
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
    dispose(){
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
    /** Elément div affiché */
    div: HTMLDivElement;
    /** Zone contenant le texte dans la div */
    span:HTMLSpanElement;    
    /** Déclaration de style de la div */
    css: CSSStyleDeclaration;
    /** Arrière-plan uni (couleur, alpha) de la zone */
    background: Background;
    /** Bordure de la zone (couleur, alpha, épaisseur, arrondi) */
    border: Border;
    /** Position et taille de la zone */
    rect: Rect;
    /** Format du texte */
    fmt: TextFormat;
    /** Zone parente de la zone */
    parentFrame: Frame;
    /** Liste des enfants de la zone */
    children: Frame[] = [];
    /** Liste des écouteurs de la zone */
    listeners:Listener[] = [];
     
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
    constructor(idFrame: string, target:Frame|HTMLElement, x: number, y: number, w: number, h: number, colorVal: number, alphaVal: number = 1.0) {
        this.div = document.createElement("div");
        this.span = document.createElement("span");
        if(target instanceof Frame) {
            target.addChild(this);
        } else {
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
    addChild(f: Frame): Frame {
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
    addChildAt(index:number, f:Frame) {
        f = this.addChild(f);
        index = Math.min(index, this.children.length-1);
        if(index < 0 || index == this.childIndex(f)) {
            return f; 
        }
        let prev = this.children[index];
        if(prev instanceof Frame) {
            this.div.insertBefore(f.div, prev.div);
            this.children[index] = f;
            this.children[index+1] = prev;
        }
    }
    /**
     * Définit la réaction à un événement
     * @param type type de l'événement à écouter (click, mousemove, mouseleave...)
     * @param callback réaction(frame, event) à cet événement 
     */
    addEventListener(type: string, callback: Function): void {
        for(let l of this.listeners) {
            if(l.isListening(type, callback)){
                return;
            }
        }
        this.listeners.push(new Listener(this, type, callback));
    } 
    /**
     * Renvoie l'index d'une zone enfant
     * @param f Enfant dont on veut l'index
     */
    childIndex(f:Frame):number {
        return this.children.indexOf(f);
    }
    /**
     * Rend fermable la zone (affiche et active une croix de fermeture)
     * @param ok rendre fermable ?
     */
    closable(ok:boolean): Frame {
        let dh: Frame = this.getChildByName("d_h");// droite haut = bouton de fermeture
        if (ok) {
            if(dh !=null) return; // déjà fermable
            dh = new Frame("d_h", this, 0, 0, 15, 15, 0xFFFFFF, 0.2);
            dh.setTextFormat("calibri",13, 0x000000, TextAlign.CENTER, true);
            dh.fmt.leading = 0.6; // remonte la croix
            dh.right = 0;
            dh.text = "x"; // ✖ = croix de fermeture &#10006

            dh.addEventListener("mouseover", () => { dh.background.alpha = 1.0 });
            dh.addEventListener("mouseout", () => { dh.background.alpha = 0.2 });
            dh.addEventListener("click", (f:Frame, e:MouseEvent)=> f.parentFrame.dispose());
            dh.cursor = Cursor.pointer;
            dh.setAttrs("title", "Fermer");
        } else {
            if (dh != null) dh.dispose();
        }
        return this;
    } 
    /**
     * Détruit la zone (enlève ses enfants, ses écouteurs, son parent)
     */
    dispose():void {
        this.removeChildren();
        this.removeListeners();
        this.parent = null;
    }
    /**
     * Renvoie une zone enfant retrouvée par son index
     * @param index index de l'enfant désiré
     */
    getChild(index: number): Frame {
        if (index < 0 || index > this.children.length - 1) {
            throw new RangeError("Pas d'enfant à l'index " + index);
        }
        return this.children[index];
    }
    /**
     * Renvoie unz zone enfant retrouvée par son nom
     * @param idChild identifiant de l'enfant désiré
     */
    getChildByName(idChild: string): Frame {
        for (let f of this.children) {
            if (f.id === idChild) return f;
        }
        return null;
    }
    /**
     * Zone déplaçable ?
     * @param ok Faut-il rendre la zone déplaçable ?
     */
    movable(ok: boolean): Frame {
        let gh: Frame = this.getChildByName("g_h");;
        if (ok) {
            if(gh !=null) return; // dééjà déplaçable
            gh = new Frame("g_h", this, -4, -4, 14, 14, 0x009999, 0.4);
            gh.setBorder(1, LineStyle.SOLID, 0x000000, 0.5, 8);
            gh.addEventListener("mousedown", Frame.FrameMove);
            gh.cursor = Cursor.grab;
            gh.setAttrs("title", "Déplacer le cadre");
        } else {
            if (gh != null) gh.dispose();
        }
        return this;
    }   
    /**
     * Supprime et détruit tous les enfants
     */
    removeChildren():Frame {
        while(this.children.length) {
            this.children.pop().dispose();
        }
        return this;
    }
    /**
     * Supprime et détruit tous les écouteurs
     */
    removeListeners():Frame {
        while(this.listeners.length) {
            this.listeners.pop().dispose();
        }
        return this;
    }
    /**
     * Supprime un écouteur d'événement
     * @param type type de l'événement à ne plus surveiller
     * @param callback fonction à ne plus appeler
     */
    removeEventListener(type: string, callback: Function): void {
        let l:Listener;
        for(var i = 0; i < this.listeners.length; i++) {
            l = this.listeners[i];
            if(l.isListening(type, callback))
            {
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
    private static FrameMove(bille: Frame, e: MouseEvent): Frame {
        let f: Frame = bille.parentFrame;
        if (f == null) return;
        bille.cursor = Cursor.grabbing;

        function moveParent(e: MouseEvent) {
            f.rect.x += e.movementX;
            f.rect.y += e.movementY;
        }
        function releaseParent(e: MouseEvent) {
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
    private static FrameResize(bille: Frame, e: Event): Frame {
        let f: Frame = bille.parentFrame;
        if (f == null) return;
        function resizeParent(e: MouseEvent) {
            f.width += e.movementX;
            f.height += e.movementY;
        }
        function releaseParent(e: MouseEvent) {
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
    removeChild(f: Frame): Frame {
        let index: number = this.children.indexOf(f);
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
    resizable(ok: boolean): Frame {
        let db: Frame = this.getChildByName("b_d");
        if (ok) {
            if(db !=null) return;
            db = new Frame("d_b", this, 0, 0, 14, 14, 0xFF00FF, 0.5);
            db.right = -3;
            db.bottom = -3;
            db.setBorder(1, LineStyle.SOLID, 0x000000, 0.5, 8);
            db.setAttrs("title", "Redimensionner");
            db.cursor = Cursor.nwse_resize;
            db.addEventListener("mousedown", Frame.FrameResize);
        } else {
            if (db != null) db.dispose();
        }
        return this;
    }

    /**
     * Définit les attributs de la div sous-jascente
     * @param propVals Suite alternant des noms et des valeurs d'attributs
     */
    setAttrs(...propVals): Frame {
        for (let i: number = 0; i < propVals.length; i += 2) {
            this.div.setAttribute(propVals[i], propVals[i+1]);
        }
        return this;
    }  
    /**
     * Définit le style du fond de la zone
     * @param colorVal couleur du fond
     * @param alphaVal transparence du fond
     */
    setBackground(colorVal: number, alphaVal: number): Frame {
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
    setBorder(thickness: number, style: LineStyle, colorVal: number, alphaVal: number = 1, radiusVal: number = 0): Frame {
        this.border.setValues(thickness, style, colorVal, alphaVal, radiusVal);
        return this;
    }    
    /**
     * Définit les propriétés css de la div
     * @param propVals Alternance des noms et valeurs des propriétés
     */
    setCss(...propVals): Frame {
        if (this.css != null) {
            for (let i: number = 0; i < propVals.length; i += 2) {
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
    setTextFormat(fontName: string, fontSize: number, textColor: number, textAlign: TextAlign, 
        bold:boolean = false, italic:boolean=false, under:boolean =false, strike:boolean = false, smallCaps:boolean = false): Frame {
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
    setTextStyle(bold:boolean=false, italic:boolean=false, under:boolean=false, strike:boolean=false, smallCaps:boolean=false):Frame {
        this.fmt.setStyleValues(bold, italic, under, strike, smallCaps);
        return this;
    }
    /**
     * Position de la zone
     * @param px position horizontale gauche
     * @param py position verticale haut
     */
    setPos(px: number, py: number): Frame {
        this.rect.setPos(px, py);
        return this;
    }
    /**
     * Taille de la zone
     * @param width largeur
     * @param height hauteur
     */
    setSize(width: number, height: number): Frame {
        this.rect.setSize(width, height);
        return this;
    }
    /**
     * Curseur au survol
     */
    get cursor():string {
        return this.css.cursor;
    }
    set cursor(value:string) {
        this.setCss("cursor", value);
    }
    /**
     * Identifiant de la zone
     */
    get id(): string {
        return this.div.id;
    }
    set id(value: string) {
        this.div.id = value;
    }
    /**
     * Zone parente (null pour enlever)
     */
    get parent(): HTMLElement {
        return this.div.parentElement;
    }
    set parent(value: HTMLElement) {
        if(value == null) {
            this.div.remove();
            this.parentFrame = null;
            this.removeListeners();
        }else{
            value.appendChild(this.div); 
        }
    }
    /**
     * Le texte doit-il est sélectionnable ?
     */
    get selectable():boolean {
        return (this.css.userSelect == "text");
    }
    set selectable(value:boolean) {
        let v:string = value ? "normal" : "none";
        this.setCss("user-select",v,"-moz-user-select", v, "-webkit-user-select", v);
    }
    /**
     * Contenu textuel
     */
    get text():string {
        return this.span.innerHTML;
    }
    set text(value: string) {
        this.span.innerHTML = value;
    }
    /**
     * Position horizontale gauche
     */
    get left(): number {
        return this.rect.x;
    }
    set left(value: number) {
        this.rect.x = value;
    }
    /**
     * Position verticale sommet
     */
    get top(): number {
        return this.rect.y;
    }
    set top(value: number) {
        this.rect.y = value;
    }
    /**
     * Position horizontale à droite (annule la position à gauche)
     */
    set right(value: number) {
        this.setCss("left", "", "right", value+"px");
    }
    /**
     * Position verticale du bas (annule la position du sommet)
     */
    set bottom(value: number) {
        this.setCss("top", "", "bottom", value+"px");
    }
    /**
     * Largeur de la zone en pixels
     */
    get width(): number {
        return this.rect.width;
    }
    set width(value: number) {
        this.rect.width = value;
    }
    /**
     * Hauteur de la zone en pixels
     */
    get height(): number {
        return this.rect.height;
    }
    set height(value: number) {
        this.rect.height = value;
    }
}

//============================================================================================================================================================
//      S T A G E
//============================================================================================================================================================

class Stage extends Frame {
    constructor(bgColor:number) {
        super("stage",document.body, 0, 0, 100, 100, bgColor, 1);
        this.setCss("width", "100%", "height", "100%");
    }
}

//============================================================================================================================================================
//      W I N  : fenêtre avec titre, options de fermeture, déplacement, rediensionnement  
//============================================================================================================================================================

class Win extends Frame {
    /** Zone de titre */
    title:Frame;
    /** Cadre de redimensionnement en bas à droite */
    sizer:Frame;
    /** Bouton de fermeture en haut à droite */
    closer:Frame;
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
    constructor(idWin: string, target:Frame|HTMLElement, x: number, y: number, w: number, h: number, bgColor: number, borderColor:number, alphaVal: number = 1.0) {
        super(idWin, target, x, y, w, h,bgColor, alphaVal);
        this.setBorder(1, LineStyle.OUTSET, borderColor, alphaVal);
        let title = new Frame("title", this, 0,0, 10, 24, 0x0000FF, 1.0);
        title.background.setGradient([0xFFFFFF,0x0000FF, 0x0000FF],[1, 0.8, 1], [0, 30, 100], 180);
        title.setTextFormat("Calibri", 12, 0xFFFFFF, TextAlign.CENTER);
        title.setBorder(1, LineStyle.SOLID, 0x0000FF, .4);
        title.setCss("width","100%");
        this.title = title;
    }
    /**
     * Options d'affichage et d'utilisation (plus jolies que closable/resizable)
     * @param mov La fenêtre peut-elle être déplacée ?
     * @param clos la fenêtre peut-elle être fermée ?
     * @param siz la fenêtre peut-elle être redimensionnée ?
     */
    setWindowOptions(mov:boolean = true, clos:boolean = true, siz:boolean = true):Win {
        let title = this.title;
        if(mov) {
            title.cursor = Cursor.grab;
            title.addEventListener("mousedown", (titl:Frame, e:MouseEvent) => {
                const previousTitle:string = titl.text;
                let fen:Frame = titl.parentFrame;
                titl.cursor = Cursor.grabbing;
                window.addEventListener("mouseup", endDragWindow);
                window.addEventListener("mousemove", dragWindow);

                function dragWindow(e:MouseEvent) {
                    fen.setPos(fen.left + e.movementX, fen.top + e.movementY);
                    titl.text = `x:${fen.left} y:${fen.top}`;
                } 
                function endDragWindow(e:Event) {
                    window.removeEventListener("mouseup", endDragWindow);
                    window.removeEventListener("mousemove", dragWindow);
                    title.cursor = Cursor.grab;
                    titl.text = previousTitle;
                }
            });            
        }
        
        if(clos) {
            let closer = new Frame("close",title, 0,0, 20, 20, 0xFFFFFF, 0.3);
            closer.text = "x";
            closer.setTextFormat("calibri", 13, 0xFFFFFF, TextAlign.CENTER, true);
            closer.fmt.leading = 0.8; // remonte un peu la croix (1 = hauteur normale)
            closer.right = 0;
            closer.cursor = Cursor.pointer;
            closer.addEventListener("mouseover", (c:Frame)=> {c.fmt.color = 0xFF0000});
            closer.addEventListener("mouseout", (c:Frame)=> {c.fmt.color = 0xFFFFFF});
            closer.addEventListener("click", (c:Frame)=> {c.parentFrame.parentFrame.dispose()});
            this.closer = closer;   
        }

        if(siz) {
            let sizer = new Frame("sizer", this, 0,0, 14, 14, 0x000000, 0.2);
            sizer.right = 0; // reste collé à droite... Eh oui :)
            sizer.bottom = 0; // reste collé en bas... Facile non ?
            sizer.cursor = Cursor.nwse_resize;
            sizer.addEventListener("mouseover", (s:Frame)=> {s.background.alpha = 0.5});
            sizer.addEventListener("mouseout", (s:Frame)=> {s.background.alpha = 0.2});
            this.sizer = sizer;

            sizer.addEventListener("mousedown", (sz:Frame, e:MouseEvent) => {
                let fen:Frame = sz.parentFrame;
                let titl:Frame = fen.getChildByName("title");
                const previousTitle:string = titl.text;
                window.addEventListener("mouseup", onEndResize);
                window.addEventListener("mousemove", onResize);

                function onResize(e:MouseEvent) {
                    fen.setSize(fen.width + e.movementX, fen.height + e.movementY);
                    if(fen.width < 100) fen.width = 100;
                    if(fen.height < 50) fen.height = 50;
                    titl.text = `${fen.width} x ${fen.height}`;
                } 
                function onEndResize(e:Event) {
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
    input:HTMLInputElement;
    /**
     * Zone de saisie générique dans un formulaire
     * @param idInput identifiant et texte d'invite
     * @param form formulaire support
     * @param px position horizontale
     * @param py position verticale
     * @param labelWidth largeur de la zone d'invite
     */
    constructor(idInput:string, inputType:string, public form:Form, px:number, py:number, labelWidth:number) {
        super(idInput, form, px, py, labelWidth, 24, 0xFFFFFF, 0);
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
    setInputCss(...propVals): Frame {
        if (this.css != null) {
            for (let i: number = 0; i < propVals.length; i += 2) {
                this.input.style[propVals[i]] = propVals[i + 1];
            }
        }
        return this;
    }
    /**
     * Définit les attributs de l'input
     * @param propVals Alternance des noms et valeurs des propriétés à modifier 
     */
    setInputAttrs(...propVals): Frame {
        if (this.css != null) {
            for (let i: number = 0; i < propVals.length; i += 2) {
                this.input.setAttribute(propVals[i], propVals[i + 1]);
            }
        }
        return this;
    }
}

class Form extends Win {
    /**
     * Réaction à chaque input 
     */
    callback:Function;
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
    constructor(idForm: string, target:Frame|HTMLElement, x: number, y: number, w: number, h: number, bgColor: number, borderColor:number, alphaVal: number = 1.0) {
        super(idForm, target, x, y, w, h, bgColor, borderColor,alphaVal);
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
    addRange(label:string, px, py, labelWidth:number, value:number, min:number, max:number):Input {
        let range = new Input(label, "range", this, px, py, labelWidth);
        let rangeLabel:Text = document.createTextNode(value.toString());
        range.div.appendChild(rangeLabel);
        range.setTextFormat("Calibri", 12, 0x000000, TextAlign.CENTER);
        range.setInputCss("width",  "60px", "height", "24px", "left", (px + labelWidth-8) + "px", "top", py+"px");
        range.setInputAttrs("min", min, "max", max, "value", value);
        range.input.oninput = (e)=> {
            rangeLabel.textContent = range.input.value;
            range.form.callback(range, e);
        } 
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
    addText(label:string, px, py, labelWidth:number, textWidth:number, valueText:string):Input {
        let txt = new Input(label, "text", this, px, py, labelWidth);
        txt.setInputCss("width",  textWidth + "px", "height", "24px", "left", (px + labelWidth) + "px", "top", py+"px");
        txt.input.value = valueText;

        return txt;
    }
    /**
     * Ajoute un bouton de formulaire (largeur automatique)
     * @param idButton identifiant du bouton
     * @param px position horizontale de la case à cocher
     * @param py position verticale de la case à cocher
     */
    addButton(idButton:string, px:number, py:number):Input {
        let btn = new Input(idButton, "button", this,  px,  py, 0);
        btn.text = "";// pas de texte d'invite
        btn.setInputCss("left", px + "px", "top", py + "px");
        btn.input.value = idButton;
        btn.input.onclick = (e:MouseEvent)=> this.callback(btn, e);
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
    addCheck(idCheckbox:string, px:number, py:number, labelWidth:number, checked:boolean):Input {
        let check = new Input(idCheckbox, "checkbox", this, px, py, labelWidth);
        check.setInputCss("left", (px + labelWidth - 4) + "px", "top", (py+4)+"px");
        check.input.checked = checked;
        check.input.onclick = (e)=> check.input.value = check.input.checked.toString();
        return check;

    }
}