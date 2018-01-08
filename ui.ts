//============================================================================================================================================================
//      C O L O R (r, g, b, rgb, rgba)
//============================================================================================================================================================

class Color {
    constructor(public value: number, public alpha: number = 1.0) {
    }
    get r(): number {
        return this.value >> 16 & 0xFF;
    }
    get g(): number {
        return this.value >> 8 & 0xFF;
    }
    get b(): number {
        return this.value & 0xFF;
    }
    get rgb(): string {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
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
//      T E X T  A L I G N (enum) left|right|center|justify|initial|inherit
//============================================================================================================================================================

enum TextAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
    JUSTIFY = "justify",
    INITIAL = "initial",
    INHERIT = "inherit"  
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
//      B A C K G R O U N D (color, alpha)
//============================================================================================================================================================

class Background {
    col: Color;
    constructor(public css: CSSStyleDeclaration, colorVal: number, alphaVal: number = 1) {
        this.col = new Color(colorVal, alphaVal);
        this.setValues(colorVal, alphaVal);
    }
    setValues(colorVal: number, alphaVal: number = 1) {
        this.color = colorVal;
        this.alpha = alphaVal;
    }
    get alpha(): number {
        return this.col.alpha;
    }
    set alpha(value: number) {
        this.col.alpha = value < 0 ? 0 : value > 1 ? 1 : value;
        this.css.backgroundColor = this.col.rgba;
    }
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
    constructor(public css: CSSStyleDeclaration, thickness: number, style: LineStyle, colorVal: number, alphaVal: number = 1.0, radiusVal: number = 0) {
        this.col = new Color(colorVal, alphaVal);
        this.setValues(thickness, style, colorVal, alphaVal, radiusVal);
    }
    setValues(thickness: number, style: LineStyle, colorVal: number, alphaVal: number = 1.0, radiusVal: number = 0) {
        this.thickness = thickness;
        this.line = style;
        this.color = colorVal;
        this.alpha = alphaVal;
        this.radius = radiusVal;
    }
    get alpha(): number {
        return this.col.alpha;
    }
    set alpha(value: number) {
        let v: number = value < 0 ? 0 : value > 1 ? 1 : value;
        this.col.alpha = value;
        this.css.borderColor = this.col.rgba;
    }
    get color(): number {
        return this.col.value;
    }
    set color(value: number) {
        this.col.value = value < 0 ? 0 : value > 0xFFFFFF ? 0xFFFFFF : value;
        this.css.borderColor = this.col.rgba;
    }
    get radius(): number {
        return parseInt(this.css.borderRadius);
    }
    set radius(value: number) {
        this.css.borderRadius = value + "px";
    }
    get line(): LineStyle {
        return LineStyle[this.css.borderStyle];
    }
    set line(value: LineStyle) {
        this.css.borderStyle = value;
    }
    get thickness(): number {
        return parseFloat(this.css.borderWidth);
    }
    set thickness(value: number) {
        this.css.borderWidth = value + "px";
    }
}

//============================================================================================================================================================
//      R E C T
//============================================================================================================================================================

class Rect {
    values: number[] = [0, 0, 0, 0];
    constructor(public css: CSSStyleDeclaration, px: number, py: number, w: number = 0, h: number = 0) {
        this.setPos(px, py);
        this.setSize(w, h);
    }
    setPos(px: number, py: number) {
        this.x = px;
        this.y = py;
    }
    setSize(w: number, h: number) {
        this.width = w;
        this.height = h;
    }
    get x(): number {
        return this.values[0];
    }
    set x(value: number) {
        this.values[0] = value;
        this.css.left = `${value}px`;
    }
    get y(): number {
        return this.values[1];
    }
    set y(value: number) {
        this.values[1] = value;
        this.css.top = `${value}px`;
    }
    get width(): number {
        return this.values[2];
    }
    set width(value: number) {
        this.values[2] = value;
        this.css.width = `${value}px`;
    }
    get height(): number {
        return this.values[3];
    }
    set height(value: number) {
        this.values[3] = value;
        this.css.height = `${value}px`;
    }
    toString(): string {
        return `(x=${this.x}, y=${this.y})-(w=${this.width}, h=${this.height})`;
    }
}

//============================================================================================================================================================
//      T E X T F O R M A T
//============================================================================================================================================================

class TextFormat {
    col: Color;
    css:CSSStyleDeclaration;
    spanCss:CSSStyleDeclaration;
    constructor(frame:Frame, fontName: string, fontSize: number, textColor: number, textAlign: TextAlign) {
        this.css = frame.div.style;
        this.spanCss = frame.span.style;
        this.col = new Color(textColor, 1.0);
        this.setBaseValues(fontName, fontSize, textColor, textAlign);
    }

    /**
     * Format général
     * @param fontName Nom de police
     * @param fontSize Taille de caractère
     * @param textColor Couleur du texte
     * @param textAlign alignement du texte (constante)
     */
    setBaseValues(fontName: string, fontSize: number, textColor: number, textAlign: TextAlign):TextFormat {
        this.font = fontName;
        this.size = fontSize;
        this.color = textColor;
        this.align = textAlign;

        return this;
    }

    /**
     * Présentation du texte
     * @param b bold (gras)
     * @param i italic (en italiques)
     * @param u underline (souligné)
     * @param s strike-thru (barré)
     */
    setStyleValues(b:boolean=false, i:boolean=false, u:boolean=false, s:boolean=false):TextFormat {
        this.bold = b;
        this.italic = i;
        this.underline = u;
        this.strikeThrough = s;

        return this;
    }

    get font(): string {
        return this.css.fontFamily;
    }
    set font(value: string) {
        this.css.fontFamily = value;
    }
    get size(): number {
        return parseInt(this.spanCss.fontSize);
    }
    set size(value: number) {
        this.spanCss.fontSize = `${value}pt`;
    }
    get alpha(): number {
        return this.col.alpha;
    }
    set alpha(value: number) {
        this.col.alpha = value;
        this.css.color = this.col.rgba;
    }
    get color(): number {
        return this.col.value;
    }
    set color(value: number) {
        this.col.value = value;
        this.css.color = this.col.rgba;
    }
    get bold(): boolean {
        return this.css.fontWeight == "bold";
    }
    set bold(value: boolean) {
        this.css.fontWeight = value ? "bold" : "";
    }
    get italic(): boolean {
        return this.css.fontStyle == "italic";
    }
    set italic(value: boolean) {
        this.css.fontSize = value ? "italic" : "";
    }
    get underline(): boolean {
        return this.css.textDecoration == "underline";
    }
    set underline(value: boolean) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "underline" : prev;
    }
    get strikeThrough(): boolean {
        return this.css.textDecoration == "line-through";
    }
    set strikeThrough(value: boolean) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "line-through" : prev;
    }
    get align(): TextAlign {
        return TextAlign[this.css.textAlign];
    }
    set align(value: TextAlign) {
        this.css.textAlign = value;
    }
    get marginLeft(): number {
        return parseInt(this.css.paddingLeft);
    }
    set marginLeft(value: number) {
        this.css.paddingLeft = `${value}px`;
    }
    get marginRight(): number {
        return parseInt(this.css.paddingRight);
    }
    set marginRight(value: number) {
        this.css.paddingRight = `${value}px`;
    }
    get letterSpacing(): number {
        return parseInt(this.css.letterSpacing);
    }
    set letterSpacing(value: number) {
        this.css.letterSpacing = `${value}px`;
    }
}

//============================================================================================================================================================
//      E V E N T  L I S T E N E R 
//============================================================================================================================================================

class Listener {
    constructor(public f:Frame, public type:string, public callback:Function) {
        this.listen();
    }
    isListening(type:string, callback:Function):boolean {
        return this.type === type && this.callback === callback;
    }
    listen() {
        let fx = e => this.callback(this.f, e);
        this.f.div.addEventListener(this.type, fx);       
    }
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
    div: HTMLDivElement;
    css: CSSStyleDeclaration;
    background: Background;
    border: Border;
    rect: Rect;
    fmt: TextFormat;
    span:HTMLSpanElement;
    parentFrame: Frame;
    children: Frame[] = [];
    listeners:Listener[] = [];
    /**
     * Zone d'affichage rectangulaire
     * @param idFrame Crée une zone visuelle
     * @param x gauche
     * @param y haut
     * @param w largeur
     * @param h hauteur
     * @param colorVal couleur de fond
     * @param alphaVal transparence du fond
     */
    constructor(idFrame: string, x: number, y: number, w: number, h: number, colorVal: number, alphaVal: number = 1.0) {
        this.div = document.createElement("div");
        this.span = document.createElement("span");
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
            dh = new Frame("d_h", 0, 0, 15, 15, 0xFFFFFF, 0.2);
            this.addChild(dh);
            dh.setTextFormat("verdana",12, 0xFF0000, TextAlign.CENTER, true);
            dh.setCss("line-height", "9px");
            dh.right = 0;
            dh.text = "x";
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
            gh = new Frame("g_h", -6, -6, 14, 14, 0x009999, 0.4);
            this.addChild(gh);
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
            bille.setPos(f.width - 14, f.height - 14);
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
            db = new Frame("d_b", this.width - 14, this.height - 14, 14, 14, 0xFF00FF, 0.5);
            this.addChild(db);
            db.setBorder(1, LineStyle.SOLID, 0x000000, 0.5, 8);
            db.addEventListener("mousedown", Frame.FrameResize);
            db.cursor = Cursor.nwse_resize;
            db.setAttrs("title", "Redimensionner le cadre");
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
     * 
     * @param thickness 
     * @param style 
     * @param colorVal 
     * @param alphaVal 
     * @param radiusVal 
     */
    setBorder(thickness: number, style: LineStyle, colorVal: number, alphaVal: number = 1, radiusVal: number = 0): Frame {
        this.border.setValues(thickness, style, colorVal, alphaVal, radiusVal);
        return this;
    }  
    /**
     * 
     * @param propVals 
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
     * 
     * @param fontName 
     * @param fontSize 
     * @param textColor 
     * @param textAlign 
     * @param bold 
     * @param italic 
     * @param underline 
     * @param strikeThru 
     */
    setTextFormat(fontName: string, fontSize: number, textColor: number, textAlign: TextAlign, 
        bold:boolean = false, italic:boolean=false, underline:boolean =false, strikeThru:boolean = false): Frame {
        this.fmt.setBaseValues(fontName, fontSize, textColor, textAlign);
        this.fmt.setStyleValues(bold, italic, underline, strikeThru);
        return this;
    }
    /**
     * 
     * @param bold 
     * @param italic 
     * @param underline 
     * @param strikeThru 
     */
    setTextStyle(bold:boolean=false, italic:boolean=false, underline:boolean=false, strikeThru:boolean=false):Frame {
        this.fmt.setStyleValues(bold, italic, underline, strikeThru);
        return this;
    }
    /**
     * 
     * @param px 
     * @param py 
     */
    setPos(px: number, py: number): Frame {
        this.rect.setPos(px, py);
        return this;
    }
    /**
     * 
     * @param width 
     * @param height 
     */
    setSize(width: number, height: number): Frame {
        this.rect.setSize(width, height);
        return this;
    }
    /**
     * 
     */
    get cursor():string {
        return this.css.cursor;
    }
    set cursor(value:string) {
        this.setCss("cursor", value);
    }
    /**
     * 
     */
    get id(): string {
        return this.div.id;
    }
    set id(value: string) {
        this.div.id = value;
    }
    /**
     * 
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
     * 
     */
    get selectable():boolean {
        return (this.css.userSelect == "text");
    }
    set selectable(value:boolean) {
        let v:string = value ? "normal" : "none";
        this.setCss("user-select",v,"-moz-user-select", v, "-webkit-user-select", v);
    }
    /**
     * 
     */
    get text():string {
        return this.span.innerHTML;
    }
    set text(value: string) {
        this.span.innerHTML = value;
    }
    /**
     * 
     */
    get left(): number {
        return this.rect.x;
    }
    set left(value: number) {
        this.rect.x = value;
    }
    /**
     * 
     */
    get top(): number {
        return this.rect.y;
    }
    set top(value: number) {
        this.rect.y = value;
    }
    /**
     * Définit la position à droite (en annulant la position à gauche)
     */
    set right(value: number) {
        this.setCss("left", "", "right", value+"px");
    }
    /**
     * Définit la position du bas (en annulant la position du haut)
     */
    set bottom(value: number) {
        this.setCss("top", "", "bottom", value+"px");
    }
    /**
     * 
     */
    get width(): number {
        return this.rect.width;
    }
    set width(value: number) {
        this.rect.width = value;
    }
    /**
     * 
     */
    get height(): number {
        return this.rect.height;
    }
    set height(value: number) {
        this.rect.height = value;
    }
}

//============================================================================================================================================================
//      W I N  : fenêtre avec titre, options de fermeture, déplacement, rediensionnement  
//============================================================================================================================================================

class Win extends Frame {
    title:Frame;

    constructor(idFrame: string, x: number, y: number, w: number, h: number, bgColor: number, borderColor, alphaVal: number = 1.0) {
        super(idFrame, x, y, w, h,bgColor, alphaVal);
        this.setBorder(1, LineStyle.OUTSET, borderColor, alphaVal);
        let title = new Frame("title", 0,0, 10, 24, 0x0000FF, 1.0);
        this.addChild(title);
        title.setTextFormat("Calibri", 12, 0xFFFFFF, TextAlign.CENTER);
        title.setBorder(2, LineStyle.OUTSET, 0xFFFFFF);
        title.setCss("width","100%");
        this.title = title;
    }

    /**
     * Définit les options d'affichage et d'utilisation (plus jolies que closable/resizable)
     * @param mov La fenêtre peut-elle être déplacée ?
     * @param clos la fenêtre peut-elle être fermée ?
     * @param siz la fenêtre peut-elle être redimensionnée ?
     */
    setOptions(mov:boolean = true, clos:boolean = true, siz:boolean = true):Win {
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
            let closer = new Frame("close", 0,0, 20, 20, 0xFFFFFF, 0.3);
            closer.text = "X";
            closer.setTextFormat("calibri", 13, 0xFFFFFF, TextAlign.CENTER, true);
            closer.setCss("line-height", "16px");
            title.addChild(closer);
            closer.right = 0;
            closer.cursor = Cursor.pointer;
            closer.addEventListener("mouseover", (c:Frame)=> {c.fmt.color = 0xFF0000});
            closer.addEventListener("mouseout", (c:Frame)=> {c.fmt.color = 0xFFFFFF});
            closer.addEventListener("click", (c:Frame)=> {c.parentFrame.parentFrame.dispose()});   
        }

        if(siz) {
            let sizer = new Frame("sizer", 0,0, 14, 14, 0x0000FF, 0.2);
            this.addChild(sizer);
            sizer.right = 0; // reste collé à droite... Eh oui :)
            sizer.bottom = 0; // reste collé en bas... Facile non ?
            sizer.cursor = Cursor.nwse_resize;
            sizer.addEventListener("mouseover", (s:Frame)=> {s.background.alpha = 0.8});
            sizer.addEventListener("mouseout", (s:Frame)=> {s.background.alpha = 0.2});

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