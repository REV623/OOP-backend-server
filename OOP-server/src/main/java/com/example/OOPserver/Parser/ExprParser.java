package com.example.OOPserver.Parser;

import com.example.OOPserver.AST.Expression.*;
import com.example.OOPserver.AST.Expression.Number;
import com.example.OOPserver.ErrorExcep.*;
import com.example.OOPserver.Tokenizer.Tokenizer;

public class ExprParser extends StatementParser implements Parser{
    private SyntaxError syntaxError_long = new SyntaxError("Expected Number");

    public ExprParser(Tokenizer tkz) {
        super(tkz);
    }

    @Override
    public Expression parse() throws SyntaxError {
        return parseExpression();
    }

    private Expression parseExpression() throws SyntaxError{
        Expression e = parseTerm();
        while (tkz.peek("+") || tkz.peek("-")){
            if(tkz.peek("+")){
                tkz.consume();
                e =  new BinaryArithExpr(e,"+",parseTerm());
            }else if(tkz.peek("-")){
                tkz.consume();
                e =  new BinaryArithExpr(e,"-",parseTerm());
            }
        }
        return e;
    }

    private Expression parseTerm() throws SyntaxError{
        Expression e = parseFactor();
        while (tkz.peek("*") || tkz.peek("/") || tkz.peek("%")) {
            if(tkz.peek("*")) {
                tkz.consume();
                e = new BinaryArithExpr(e,"*",parseFactor());
            }else if(tkz.peek("/")) {
                tkz.consume();
                e = new BinaryArithExpr(e,"/",parseFactor());
            }else if(tkz.peek("%")) {
                tkz.consume();
                e = new BinaryArithExpr(e,"%",parseFactor());
            }
        }
        return e;
    }

    private Expression parseFactor() throws SyntaxError {
        Expression p = parsePower();
        if (tkz.peek("^")){
            tkz.consume();
            Expression f = parseFactor();
            return new BinaryArithExpr(p,"^",f);
        }
        return p;
    }

    private Expression parsePower() throws SyntaxError {
        Expression e;
        String number = tkz.peek();
        if(isDigit(number.charAt(0))){
            try {
                tkz.consume();
                e = new Number(Long.parseUnsignedLong(number));
            }catch (NumberFormatException error){
                throw error;
            }
        }else if(tkz.peek("(")){
            tkz.consume("(");
            e = parseExpression();
            tkz.consume(")");
        }else if(tkz.peek("opponent")){
            tkz.consume();
            e = parseInfo(true);
        }else if(tkz.peek("nearby")){
            tkz.consume();
            e = parseInfo(false);
        }else{
            String identifier = tkz.consume();
            if(!isIdentifier(identifier)) throw syntaxError_identifier;
            e = new Identifier(identifier);
        }
        return e;
    }

    private Expression parseInfo(boolean isOpponent) throws SyntaxError {
        if(isOpponent) return new OpponentInfo();
        else return new NearbyInfo(parseDirection());
    }
}
