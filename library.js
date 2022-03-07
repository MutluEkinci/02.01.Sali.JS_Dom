class Link
{
    constructor(link,adres)
    {
        this.link=link;
        this.adres=adres;
    }

    htmlYaz()
    {
        document.writeln("<a href='"+this.adres+"'>"+this.link+"</a>")
    }
}

class ResimLink extends Link
{
    constructor(link,adres,resim)
    {
        super(link,adres);
        this.resim=resim;
    }

    htmlYaz()
    {
        document.writeln("<a href='"+this.adres+"'><img src='"+this.resim+"'width='120px' height='90px' alt='"+this.link+"'/></a>")
    }
}