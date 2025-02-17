/*
 * _dom.js - basic DOM methods for getting/setting attrs, get DOM elements, etc.
 * 
 * Copyright (c) 2024 Greg Strange
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, subject to
 * including this permission notice in all copies or substantial portions
 * of the Software.
 */

class _dom
{
	constructor( _opts )
	{
		new _log( '_dom constructor' );
		new _log( _opts );

		let _defaults = {};
		this.opts = { ..._defaults, ..._opts };

		new _log( '_dom constructor opts' );
		new _log( this.opts );
		return this;
	}

	static attr( elemId, attrName, value )
	{
		let elem = document.querySelector( selector );

		if( !elem )
		{
			new _log( `Element not found in DOM: ${elemId}` );
			return null;
		}

		if( !value )
		{
			// Get attribute
			let result = elem.getAttribute( attrName );
			new _log( `Getting attribute ${attrName} for ${elemId}: ${result}` );
			return result;
		}
		else
		{
			// Set attribute
			elem.setAttribute( attrName, value );
			new _log( `Setting attribute ${attrName} for ${elemId} to ${value}` );
			return value;
		}
	}

	static val( selector, value )
	{
		let elem = document.querySelector( selector );

		if( !elem )
		{
			new _log( `Element not found in DOM: ${selector}` );
			return null;
		}

		if( 'undefined' === typeof value )
		{
			// Get value
			let result = elem.value;
			new _log( `Getting value for ${selector}: ${result}` );
			return result;
		}
		else
		{
			// Set value
			elem.value = value;
			new _log( `Setting value for ${selector} to ${value}` );
			return value;
		}
	}

	static elem( selector )
	{
		return document.querySelector( selector );
	}

	static elemAll( selector )
	{
		let elements = Array.from( document.querySelectorAll( selector ) );
		if( !elements.length )
		{
			new _log( `No elements found for selector: ${selector}` );
			return this._chainableMethods( [] );
		}
		return this._chainableMethods( elements );
	}

	static empty( selector )
	{
		let elements = this.elem( selector ).elements;
		elements.forEach(
			( elem ) =>
			{
				let tagName = elem.tagName.toLowerCase();
				if( 'select' == tagName )
				{
					elem.options.length = 0;
				}
				else if( 'textarea' == tagName )
				{
					elem.value = '';
				}
				else if( 'input' != tagName )
				{
					elem.innerHTML = '';
				}
			}
		);
		new _log( `Emptied elements matching: ${selector}` );
		return true;
	}

	static _chainableMethods( elements )
	{
		return {
			not: ( notSelector ) =>
			{
				elements = elements.filter(
					( elem ) =>
					{
						return !elem.matches( notSelector );
					}
				);
				return this._chainableMethods( elements );
			},
			elements: elements
		};
	}

	static hasClass( selector, className )
	{
		let elem = _dom.elem( selector );
		if( !elem )
		{
			return false;
		}

		return elem.classList.contains( className );
	}

	static addClass( selector, className )
	{
		let elems = _dom.elemAll( selector );
		if( !elems )
		{
			return false;
		}

		elems.elements.forEach(
			( element ) =>
			{
				if( !_dom.hasClass( selector, className ) )
				{
					element.classList.add( className );
				}
			}
		);

		return true;
	}

	static removeClass( selector, className )
	{
		let elems = _dom.elemAll( selector );
		if( !elems )
		{
			return false;
		}

		elems.elements.forEach(
			( element ) =>
			{
				if( _dom.hasClass( selector, className ) )
				{
					element.classList.remove( className );
				}
			}
		);

		return true;
	}

	static toggleClass( selector, className )
	{
		if( this.hasClass( selector, className ) )
		{
			this.removeClass( selector, className );
		}
		else
		{
			this.addClass( selector, className );
		}

		return true;
	}
}