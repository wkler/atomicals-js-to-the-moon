"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderPreviewsCommand = exports.isText = exports.isImage = void 0;
function isImage(contentType) {
    return /^image\/(jpe?g|png|gif|bmp|webp|svg)$/.test(contentType);
}
exports.isImage = isImage;
function isText(contentType) {
    return /utf\-?8|application\/json|text\/plain|markdown|xml|html/.test(contentType);
}
exports.isText = isText;
class RenderPreviewsCommand {
    constructor(filesmap, body) {
        this.filesmap = filesmap;
        this.body = body;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const inputIndex in this.filesmap) {
                if (!this.filesmap.hasOwnProperty(inputIndex)) {
                    continue;
                }
                console.log(`-------------------------------------------------`);
                console.log(`Rendering files at inputIndex ${inputIndex}`);
                for (const filename in this.filesmap[inputIndex].files) {
                    if (!this.filesmap[inputIndex].files.hasOwnProperty(filename)) {
                        continue;
                    }
                    console.log(`-------------------------------------------------`);
                    console.log(`Rendering file ${filename}`);
                    const filepath = this.filesmap[inputIndex].files[filename].fullPath;
                    const contentType = this.filesmap[inputIndex].files[filename].contentType;
                    const contentLength = this.filesmap[inputIndex].files[filename].contentLength;
                    const body = this.filesmap[inputIndex].files[filename].body;
                    console.log('File name: ', filename);
                    console.log('Full path: ', filepath);
                    console.log('Content Type: ', contentType);
                    console.log('Content Length: ', contentLength);
                    if (this.body) {
                        console.log('Body (hex encoded): ', this.filesmap[inputIndex].files[filename].body);
                    }
                    if (isImage(contentType)) {
                        const { default: terminalImage } = yield Promise.resolve().then(() => require("terminal-image"));
                        console.log(yield terminalImage.file(filepath));
                    }
                    else if (isText(contentType)) {
                        console.log('Body decoded: ');
                        console.log(Buffer.from(this.filesmap[inputIndex].files[filename].body, 'hex').toString('utf8'));
                    }
                    else {
                        console.log(`File is not an image or text-like. View file manually at ${filepath}`);
                    }
                }
            }
            /*
            displayImage.fromFile("banner.png").then(image => {
              console.log(image)
            })
        
            displayImage.fromFile("shadow.gif").then(image => {
              console.log(image)
            })
        
            displayImage.fromFile("ape.png").then(image => {
              console.log(image)
            })
        
            displayImage.fromFile("pepe.png").then(image => {
              console.log(image)
            }) */
            return null;
        });
    }
}
exports.RenderPreviewsCommand = RenderPreviewsCommand;
/*

 // Remove the body by default
      if (!body) {
        for (const inputIndex in result.data.filemap) {
          if (!result.data.filemap.hasOwnProperty(inputIndex)) {
            continue;
          }
          for (const filename in result.data.filemap[inputIndex].files) {
            if (!result.data.filemap[inputIndex].files.hasOwnProperty(filename)) {
              continue;
            }
            const fileEntry = result.data.filemap[inputIndex].files[filename];
            delete fileEntry['body'];
          }
        }
      }

*/ 
