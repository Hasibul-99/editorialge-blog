import React, { Fragment, useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import Logo from "../../../assets/img/logo/logo.png"
import WLogo from "../../../assets/img/logo/w_logo.png"
import { categoryListWithRelation } from "@/scripts/graphql-query";
type Props = {}

export default function MobileMenuToggle({ }: Props) {
  // Fetch categories and handle locale-aware base path
  const [categories, setCategories] = useState<any[]>([]);
  const [locale, setLocale] = useState<string>('en');
  const basePath = locale === 'bn' ? '/bn' : '';
  // Collapsible states
  const [openRoot, setOpenRoot] = useState<boolean>(false);
  const [openCats, setOpenCats] = useState<Record<string, boolean>>({});

  const toggleRoot = () => setOpenRoot(v => !v);
  const toggleCat = (slug: string) => setOpenCats(prev => ({ ...prev, [slug]: !prev[slug] }));

  useEffect(() => {
    const loc = window.location.pathname.startsWith('/bn') ? 'bn' : 'en';
    setLocale(loc);
    (async () => {
      try {
        const res = await fetch(`${import.meta.env.PUBLIC_BASEURL}/graphql`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: categoryListWithRelation(loc) }),
        });
        const json = await res.json();
        setCategories(json?.data?.categories ?? []);
      } catch (e) {
        console.error('Failed to load categories', e);
      }
    })();
  }, []);

  return (
        <Fragment>
            <Sheet>
                <SheetTrigger asChild>
                    <button type="button" className="mobile-menu-trigger">
                        <FaBars />
                    </button>
                </SheetTrigger>

                <SheetContent side={"right"} className='mobile-menu'>
                    <nav className="menu-box">
                        {/* <div className="close-btn"><i className="fas fa-times" /></div> */}
                        <div className="nav-logo">
                            <a href={basePath || "/"}><img src={Logo.src} alt="Logo" /></a>
                        </div>
                        <div className="nav-logo d-none">
                            <a href={basePath || "/"}><img src={WLogo.src} alt="Logo" /></a>
                        </div>
                        <div className="mobile-search">
                            {/* <form action="#">
                                <input type="text" placeholder="Search here..." />
                                <button><i className="flaticon-search" /></button>
                            </form> */}
                        </div>
                        <div className="menu-outer">
                            <ul className="navigation">
                                <li><a href={`${basePath}/`}>Home</a></li>
                                {categories?.length ? (
                                    <li className="menu-item-has-children">
                                        <a href="#" onClick={(e)=>e.preventDefault()}>Categories</a>
                                        <ul className="sub-menu" style={{ display: openRoot ? 'block' : 'none' }}>
                                            {categories.map((cat: any) => (
                                                <li key={cat.slug} className={cat?.categories?.length ? "menu-item-has-children" : undefined}>
                                                    <a href={`${basePath}/category/${cat.slug}`}>{cat.title}</a>
                                                    {cat?.categories?.length ? (
                                                        <ul className="sub-menu" style={{ display: openCats[cat.slug] ? 'block' : 'none' }}>
                                                            {cat.categories.map((sub: any) => (
                                                                <li key={sub.slug}><a href={`${basePath}/category/${sub.slug}`}>{sub.title}</a></li>
                                                            ))}
                                                        </ul>
                                                    ) : null}
                                                    {cat?.categories?.length ? (
                                                        <div
                                                            className={`dropdown-btn${openCats[cat.slug] ? ' open' : ''}`}
                                                            role="button"
                                                            aria-expanded={!!openCats[cat.slug]}
                                                            onClick={() => toggleCat(cat.slug)}
                                                        >
                                                            <span className="fas fa-angle-down" />
                                                        </div>
                                                    ) : null}
                                                </li>
                                            ))}
                                        </ul>
                                        <div
                                            className={`dropdown-btn${openRoot ? ' open' : ''}`}
                                            role="button"
                                            aria-expanded={openRoot}
                                            onClick={toggleRoot}
                                        >
                                            <span className="fas fa-angle-down" />
                                        </div>
                                    </li>
                                ) : null}
                                <li><a href="/contact">Contact</a></li>
                            </ul>

                        </div>
                        <div className="social-links">
                            <ul className="clearfix list-wrap">
                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                <li><a href="#"><i className="fab fa-youtube" /></a></li>
                            </ul>
                        </div>
                    </nav>

                </SheetContent>
            </Sheet>
        </Fragment>
  )
}